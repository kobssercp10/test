"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import games from "@/lib/games.json";
import useBotEnv from "@/hooks/useBotEnv";

interface PageProps {
  params: { slug: string };
}

export default function GamePage({ params }: PageProps) {
  const router = useRouter();
  const { BOT_USERNAME } = useBotEnv();
  const game = (games as any[]).find((g) => g.slug === params.slug);
  if (!game) {
    return <div className="p-4">Game not found</div>;
  }

  const handlePlay = async () => {
    const res = await fetch(`/api/game-url?code=${encodeURIComponent(game.code)}`);
    const data = await res.json();
    const url = new URL(data.game_url);
    url.searchParams.delete("ip");
    if (BOT_USERNAME) {
      url.searchParams.set("return_url", `https://t.me/${BOT_USERNAME}`);
    }
    window.location.href = url.toString();
  };

  return (
    <div className="p-4">
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        Back
      </Button>
      <div className="relative w-full h-40 mb-6">
        <Image src={game.image} alt={game.title} fill className="object-cover blur-md" />
        <div className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center gap-4">
          <Image src={game.image} alt={game.title} width={80} height={80} className="rounded-md" />
          <h1 className="text-xl font-bold">{game.title}</h1>
        </div>
      </div>
      <Button onClick={handlePlay}>Play now</Button>
    </div>
  );
}
