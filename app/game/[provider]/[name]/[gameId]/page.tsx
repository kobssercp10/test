"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import useBotEnv from "@/hooks/useBotEnv";
import apiConfig from "@/data/api-config.json";
import games from "@/data/games.json";

interface PageProps {
  params: { provider: string; name: string; gameId: string };
}

export default function GamePage({ params }: PageProps) {
  const router = useRouter();
  const { BOT_USERNAME } = useBotEnv();
  const [loading, setLoading] = useState(false);

  const apiPath = `${params.provider}/${params.name}/${params.gameId}`;
  const game = games.find((g) => g.apiPath === apiPath) || {
    title: "",
    image: "/placeholder.jpg",
    apiPath,
  };

  const handlePlay = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.playamo.com/api/games/launch_options/${apiPath}`,
        {
          headers: { ...(apiConfig.headers as any), Cookie: apiConfig.cookies },
        },
      );
      const data = await res.json();
      let gameUrl = data.launch_options.game_url as string;
      const url = new URL(gameUrl);
      url.searchParams.delete("ip");
      if (BOT_USERNAME) {
        const botLink = `https://t.me/${BOT_USERNAME}`;
        url.searchParams.set("return_url", botLink);
      }
      window.location.href = url.toString();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Button>
      <div className="relative w-full h-40 mb-6">
        <Image src={game.image} alt={game.title} fill className="object-cover blur-2xl" />
        <div className="absolute left-4 bottom-4 flex items-center">
          <Image
            src={game.image}
            alt={game.title}
            width={96}
            height={120}
            className="rounded-xl"
          />
          <div className="ml-4">
            <h1 className="text-xl font-bold">{game.title}</h1>
            <Button
              onClick={handlePlay}
              disabled={loading}
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-2"
            >
              Play now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
