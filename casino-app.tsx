"use client";

import { useState } from "react";
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

  const featuredGames = [
    {
      id: 1,
      title: "LUCKY TIGER",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 2,
      title: "GATES OF OLYMPUS",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 3,
      title: "SWEET BONANZA 1000",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 4,
      title: "BUFFALO",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 5,
      title: "BOOK OF DEAD",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 6,
      title: "STARBURST",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 7,
      title: "GONZO'S QUEST",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 8,
      title: "MEGA MOOLAH",
      image: "https://placehold.co/150x150?text=Game",
    },
  ];

  const topGames = [
    {
      id: 1,
      title: "GATES OF OLYMPUS",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 2,
      title: "BIG BASS BONANZA",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 3,
      title: "JOHN HUNTER",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 4,
      title: "BIG BASS SPLASH",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 5,
      title: "WOLF GOLD",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 6,
      title: "THE DOG HOUSE",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 7,
      title: "RAZOR SHARK",
      image: "https://placehold.co/150x150?text=Game",
    },
    {
      id: 8,
      title: "FIRE JOKER",
      image: "https://placehold.co/150x150?text=Game",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#240046] to-[#2e003e] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm">
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
      <div className="mx-4 mt-4 relative overflow-hidden rounded-2xl">
        <Image
          src="https://placehold.co/600x120?text=Welcome+Offer+Banner"
          alt="Welcome Offer"
          width={600}
          height={120}
          className="w-full h-auto rounded-2xl object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <p className="text-sm font-semibold">Up to 1000 USDT</p>
          <p className="text-sm font-semibold">+50 Free Spins</p>
          <p className="text-sm font-semibold mb-2">On 2 Wild 2 Die</p>
          <Button className="bg-[#ff3cac] hover:bg-[#ff3cac]/90 text-white px-8 py-2 rounded-full font-bold">
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
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {featuredGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-36 rounded-xl overflow-hidden shadow hover:shadow-lg bg-purple-800"
            >
              <Image
                src={game.image}
                alt={game.title}
                width={150}
                height={150}
                className="object-cover"
              />
              <p className="p-2 text-center text-xs font-semibold">
                {game.title}
              </p>
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
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {topGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-36 rounded-xl overflow-hidden shadow hover:shadow-lg bg-purple-800"
            >
              <Image
                src={game.image}
                alt={game.title}
                width={150}
                height={150}
                className="object-cover"
              />
              <p className="p-2 text-center text-xs font-semibold">
                {game.title}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-purple-700/50">
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
