"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import useBotEnv from "@/hooks/useBotEnv";

interface Game {
  code: string;
  title: string;
  image: string;
}

export default function GamePage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();
  const { BOT_USERNAME } = useBotEnv();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const allGames: Game[] = data.sections.flatMap((s: { games: Game[] }) => s.games);
        const found = allGames.find((g) => g.code === code);
        setGame(found || null);
      })
      .catch(() => {});
  }, [code]);

  const handlePlay = async () => {
    if (!code) return;
    try {
      const res = await fetch(`/api/game-url?code=${encodeURIComponent(code)}`);
      const data = await res.json();
      const url = data.launch_options?.game_url;
      if (url) {
        const gameUrl = new URL(url);
        gameUrl.searchParams.delete("ip");
        if (BOT_USERNAME) {
          const botLink = `https://t.me/${BOT_USERNAME}`;
          gameUrl.searchParams.set("return_url", encodeURIComponent(botLink));
        }
        window.location.href = gameUrl.toString();
      }
    } catch {
      // ignore
    }
  };

  if (!game) return null;

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex items-center text-pink-500 m-4"
      >
        <ArrowLeft className="w-5 h-5 mr-1" /> Back
      </button>
      <div className="relative w-full h-40 sm:h-56 mb-4">
        <Image src={game.image} alt={game.title} fill className="object-cover blur-xl" />
        <div className="absolute top-1/2 left-4 -translate-y-1/2 flex">
          <Image
            src={game.image}
            alt={game.title}
            width={120}
            height={150}
            className="rounded-lg"
          />
          <div className="ml-4 flex flex-col justify-center">
            <h1 className="text-xl font-bold">{game.title}</h1>
            <Button
              onClick={handlePlay}
              className="mt-2 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              Play Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
