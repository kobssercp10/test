"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Game {
  slug: string;
  title: string;
  image: string;
  api: string;
  rating: number;
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const [game, setGame] = useState<Game | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data: Game[]) => {
        const g = data.find((x) => x.slug === params.slug) || null;
        setGame(g);
      });
  }, [params.slug]);

  const play = async () => {
    if (!game) return;
    const res = await fetch(`/api/launch/${game.api}`);
    const data = await res.json();
    if (data.game_url) {
      window.location.href = data.game_url;
    }
  };

  if (!game) return <main className="p-4">Game not found</main>;

  return (
    <main className="p-4">
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        Back
      </Button>
      <div className="relative w-full h-48 mb-4">
        <Image
          src={game.image}
          alt=""
          fill
          className="object-cover blur-3xl scale-105"
        />
        <div className="absolute inset-0 flex items-center p-4">
          <Image
            src={game.image}
            alt={game.title}
            width={120}
            height={120}
            className="rounded-md"
          />
          <h1 className="text-2xl font-bold ml-4">{game.title}</h1>
        </div>
      </div>
      <Button onClick={play}>Play now</Button>
    </main>
  );
}
