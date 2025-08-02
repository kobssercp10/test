"use client";

import useBotEnv from "@/hooks/useBotEnv";
import games from "@/lib/games.json";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  const { BOT_USERNAME } = useBotEnv();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Games</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <Link key={game.slug} href={`/games/${game.slug}`}>
            <Card className="relative aspect-[4/5] rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac] border-none">
              <Image src={game.image} alt={game.title} fill className="object-cover" />
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-10 mb-20 text-center">
        <a
          href={`https://t.me/${BOT_USERNAME}`}
          className="text-pink-400 text-sm hover:underline"
        >
          {BOT_USERNAME ? `@${BOT_USERNAME}` : ""}
        </a>
      </div>
    </div>
  );
}
