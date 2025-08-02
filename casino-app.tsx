"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface Game {
  slug: string;
  title: string;
  image: string;
  rating: number;
}

export default function Component() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data: Game[]) => setGames(data))
      .catch(() => {});
  }, []);

  return (
    <main className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {games.map((game) => (
        <Link key={game.slug} href={`/games/${game.slug}`}>
          <Card className="overflow-hidden bg-purple-800 border-none hover:ring-2 hover:ring-pink-500 rounded-xl transition-shadow">
            <div className="relative aspect-[4/5]">
              <Image src={game.image} alt={game.title} fill className="object-cover" />
            </div>
          </Card>
        </Link>
      ))}
    </main>
  );
}
