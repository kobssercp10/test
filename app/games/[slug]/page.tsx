"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import games from "@/data/games.json";
import { useState } from "react";

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = (games as any[]).find((g) => g.slug === params.slug);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!game) {
    return <div className="p-4">Game not found</div>;
  }

  const handlePlay = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/play/${game.slug}`);
      const data = await res.json();
      if (data.game_url) {
        window.location.href = data.game_url;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-4">
      <div className="relative">
        <div className="relative w-full h-60 sm:h-72 md:h-84">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover blur-2xl brightness-75"
          />
          <button
            onClick={() => router.back()}
            className="absolute top-2 left-4 flex items-center text-white/70 m-4 z-10"
          >
            <ArrowLeft className="w-5 h-5 mr-1" /> Back
          </button>
        </div>
        <div className="absolute inset-0 flex items-center gap-6 top-5 p-8">
          <Image
            src={game.image}
            alt={game.title}
            width={100}
            height={125}
            className="rounded-md"
          />
          <div>
            <h1 className="text-xl font-bold mb-4">
              {game.title.toUpperCase()}
            </h1>
            <Button
              onClick={handlePlay}
              disabled={loading}
              className="bg-[#ff3cac] hover:bg-[#ff3cac]/90 text-white rounded-full px-4"
            >
              {loading ? "Loading..." : "Play now"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
