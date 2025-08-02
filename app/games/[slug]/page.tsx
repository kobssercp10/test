"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import games from "@/data/games.json";
import { useState } from "react";

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = (games as any[]).find((g) => g.slug === params.slug);
  const [loading, setLoading] = useState(false);

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
        <div className="relative w-full h-48 sm:h-60 md:h-72">
          <Image src={game.image} alt={game.title} fill className="object-cover blur-xl" />
        </div>
        <Link href="/" className="absolute top-4 left-4 flex items-center text-white">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Link>
        <div className="absolute inset-0 flex items-center gap-4 p-4">
          <Image src={game.image} alt={game.title} width={100} height={125} className="rounded-md" />
          <div>
            <h1 className="text-xl font-bold mb-2">{game.title}</h1>
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
