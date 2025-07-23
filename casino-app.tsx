"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Home,
  Search,
  Gift,
  Wallet,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  const [balance] = useState("0.00000");

  const featuredRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const newRef = useRef<HTMLDivElement>(null);
  const jackpotRef = useRef<HTMLDivElement>(null);
  const popularRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: 150, behavior: "smooth" });
  };

  const featuredGames = [
    {
      id: 1,
      title: "LUCKY TIGER",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 2,
      title: "GATES OF OLYMPUS",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 3,
      title: "SWEET BONANZA 1000",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 4,
      title: "BUFFALO",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 5,
      title: "BOOK OF DEAD",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 6,
      title: "STARBURST",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 7,
      title: "GONZO'S QUEST",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 8,
      title: "MEGA MOOLAH",
      image: "https://placehold.co/160x200?text=Game",
    },
  ];

  const topGames = [
    {
      id: 1,
      title: "GATES OF OLYMPUS",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 2,
      title: "BIG BASS BONANZA",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 3,
      title: "JOHN HUNTER",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 4,
      title: "BIG BASS SPLASH",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 5,
      title: "WOLF GOLD",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 6,
      title: "THE DOG HOUSE",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 7,
      title: "RAZOR SHARK",
      image: "https://placehold.co/160x200?text=Game",
    },
    {
      id: 8,
      title: "FIRE JOKER",
      image: "https://placehold.co/160x200?text=Game",
    },
  ];

  const newGames = [
    { id: 1, title: "CRYSTAL CAVERNS", image: "https://placehold.co/160x200?text=Game" },
    { id: 2, title: "PIRATE GOLD", image: "https://placehold.co/160x200?text=Game" },
    { id: 3, title: "AZTEC GEMS", image: "https://placehold.co/160x200?text=Game" },
    { id: 4, title: "WILD WEST GOLD", image: "https://placehold.co/160x200?text=Game" },
    { id: 5, title: "FRUIT PARTY", image: "https://placehold.co/160x200?text=Game" },
    { id: 6, title: "SUGAR RUSH", image: "https://placehold.co/160x200?text=Game" },
    { id: 7, title: "MAGIC JOURNEY", image: "https://placehold.co/160x200?text=Game" },
    { id: 8, title: "DRAGON KINGDOM", image: "https://placehold.co/160x200?text=Game" },
  ];

  const jackpotGames = [
    { id: 1, title: "DIVINE FORTUNE", image: "https://placehold.co/160x200?text=Game" },
    { id: 2, title: "HALL OF GODS", image: "https://placehold.co/160x200?text=Game" },
    { id: 3, title: "ARABIAN NIGHTS", image: "https://placehold.co/160x200?text=Game" },
    { id: 4, title: "COSMIC FORTUNE", image: "https://placehold.co/160x200?text=Game" },
    { id: 5, title: "TREASURE NILE", image: "https://placehold.co/160x200?text=Game" },
    { id: 6, title: "KING CASHALOT", image: "https://placehold.co/160x200?text=Game" },
    { id: 7, title: "MAJOR MILLIONS", image: "https://placehold.co/160x200?text=Game" },
    { id: 8, title: "CASH SPLASH", image: "https://placehold.co/160x200?text=Game" },
  ];

  const popularGames = [
    { id: 1, title: "STARBURST", image: "https://placehold.co/160x200?text=Game" },
    { id: 2, title: "MONKEY MADNESS", image: "https://placehold.co/160x200?text=Game" },
    { id: 3, title: "TORNADO FRUITS", image: "https://placehold.co/160x200?text=Game" },
    { id: 4, title: "WOLF HOWL", image: "https://placehold.co/160x200?text=Game" },
    { id: 5, title: "ROULETTE", image: "https://placehold.co/160x200?text=Game" },
    { id: 6, title: "BLACKJACK", image: "https://placehold.co/160x200?text=Game" },
    { id: 7, title: "MEGA DREAMS", image: "https://placehold.co/160x200?text=Game" },
    { id: 8, title: "LUCKY SPINS", image: "https://placehold.co/160x200?text=Game" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#240046] to-[#2e003e] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-black/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-lg">Crashino</span>
        </div>

        <div className="flex items-center gap-1 bg-black/30 rounded-full px-3 py-1">
          <span className="text-base">🪙</span>
          <span className="text-sm font-medium">{balance}</span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full overflow-hidden p-0"
        >
          <Image
            src="https://placehold.co/40x40"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </Button>
      </div>


      {/* Welcome Offer Banner */}
      <div className="mx-0 mt-px relative overflow-hidden">
        <Image
          src="https://placehold.co/1280x720?text=Welcome+Offer+Banner"
          alt="Welcome Offer"
          width={1280}
          height={720}
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <Button className="bg-[#ff3cac] hover:bg-[#ff3cac]/90 text-white px-6 py-2 rounded-full font-bold">
            Deposit
          </Button>
        </div>
      </div>

      {/* Featured Games */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Featured</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollLeft(featuredRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollRight(featuredRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div ref={featuredRef} className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {featuredGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac]"
            >
              <div className="relative aspect-[4/5]">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Games */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Top Games</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollLeft(topRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollRight(topRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div ref={topRef} className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {topGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac]"
            >
              <div className="relative aspect-[4/5]">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* New Games */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">New Games</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollLeft(newRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollRight(newRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div ref={newRef} className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {newGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac]"
            >
              <div className="relative aspect-[4/5]">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Jackpot Games */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Jackpot Games</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollLeft(jackpotRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollRight(jackpotRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div ref={jackpotRef} className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {jackpotGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac]"
            >
              <div className="relative aspect-[4/5]">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Games */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Popular Games</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollLeft(popularRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollRight(popularRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div ref={popularRef} className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {popularGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac]"
            >
              <div className="relative aspect-[4/5]">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-purple-700/50">
        <div className="flex items-center justify-around py-2">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-[#ff3cac] drop-shadow-[0_0_6px_#ff3cac] p-2"
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-gray-400 p-2"
          >
            <Search className="w-5 h-5" />
            <span className="text-xs">Search</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-gray-400 p-2"
          >
            <Gift className="w-5 h-5" />
            <span className="text-xs">Offers</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-gray-400 p-2"
          >
            <Wallet className="w-5 h-5" />
            <span className="text-xs">Wallet</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-gray-400 p-2"
          >
            <DollarSign className="w-5 h-5" />
            <span className="text-xs">Earn</span>
          </Button>
        </div>
      </div>

      {/* Spacer for bottom navigation */}
      <div className="h-20"></div>
    </div>
  );
}
