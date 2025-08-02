"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import gamesData from "@/data/games.json";

interface Game {
  title: string;
  image: string;
  rating: number;
}

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Recommended");
  const games = gamesData as Game[];

  const filtered = games.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase()),
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "A-Z") return a.title.localeCompare(b.title);
    if (sort === "Z-A") return b.title.localeCompare(a.title);
    return b.rating - a.rating;
  });

  return (
    <main className="p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-4 items-center">
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-sm">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent className="bg-black backdrop-blur-lg bg-opacity-50 text-white font-bold rounded-md border-pink-500/50">
            <SelectItem className="py-2" value="Recommended">Recommended</SelectItem>
            <SelectItem className="py-2" value="A-Z">A-Z</SelectItem>
            <SelectItem className="py-2" value="Z-A">Z-A</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Search by Game"
          value={search}
          className="w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-sm"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
        {sorted.map((game) => (
          <Card
            key={game.title}
            className="overflow-hidden bg-purple-800 transition-shadow border-none hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac] rounded-xl"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover"
              />
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
