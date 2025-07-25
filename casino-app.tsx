"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const featuredRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const newRef = useRef<HTMLDivElement>(null);
  const cryptoRef = useRef<HTMLDivElement>(null);
  const jackpotRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: 150, behavior: "smooth" });
  };

  const featuredGames = [
    {
      id: 1,
      title: "Lucky Tiger",
      image: "/images/games/lucky_tiger.png",
    },
    {
      id: 2,
      title: "Gates of Olympus",
      image: "/images/games/gates_of_olympus.png",
    },
    {
      id: 3,
      title: "Sweet Bonanza",
      image: "/images/games/sweet_bonanza.png",
    },
    {
      id: 4,
      title: "Buffalo King",
      image: "/images/games/buffalo_king.png",
    },
  ];

  const topGames = [
    {
      id: 1,
      title: "Gates of Olympus",
      image: "/images/games/gates_of_olympus.png",
    },
    {
      id: 2,
      title: "Big Bass Bonanza",
      image: "/images/games/big_bass_bonanza.png",
    },
    {
      id: 3,
      title: "John Hunter and Galileo",
      image: "/images/games/john_hunter_and_galileo.png",
    },
    {
      id: 4,
      title: "Big Bass Return To The Races",
      image: "/images/games/big_bass_return_to_the_races.png",
    },
  ];

  const newGames = [
    { id: 1, title: "The Dog House", image: "/images/games/the_dog_house.png" },
    { id: 2, title: "Book of Monsters", image: "/images/games/book_of_monsters.png" },
    { id: 3, title: "Lucky Tiger", image: "/images/games/lucky_tiger.png" },
    { id: 4, title: "Blitz Super Wheel", image: "/images/games/blitz_super_wheel.png" },
    { id: 5, title: "Wild Wild Joker", image: "/images/games/wild_wild_joker.png" },
    { id: 6, title: "Lucky Mouse", image: "/images/games/lucky_mouse.png" },
  ];

  const cryptoGames = [
    { id: 1, title: "Aviator", image: "/images/games/crypto_games/aviator.png" },
    { id: 2, title: "Big Bass Crash", image: "/images/games/crypto_games/big_bass_crash.png" },
    { id: 3, title: "Crash Duel X", image: "/images/games/crypto_games/crash_duel_x.png" },
    { id: 4, title: "Cricket Crash", image: "/images/games/crypto_games/cricket_crash.png" },
    { id: 5, title: "Football Manager", image: "/images/games/crypto_games/football_manager.png" },
    { id: 6, title: "Magnify Man", image: "/images/games/crypto_games/magnify_man.png" },
    { id: 7, title: "Need for X", image: "/images/games/crypto_games/need_for_x.png" },
    { id: 8, title: "Plinko", image: "/images/games/crypto_games/plinko.png" },
    { id: 9, title: "Save the Hamster", image: "/images/games/crypto_games/save_the_hamster.png" },
    { id: 10, title: "Spaceman", image: "/images/games/crypto_games/spaceman.png" },
  ];

  const jackpotGames = [
    { id: 1, title: "5 Lions Gold", image: "/images/games/jackpots/5_lions_gold.png" },
    { id: 2, title: "Cosmic Cash", image: "/images/games/jackpots/cosmic_cash.png" },
    { id: 3, title: "Diamond Strike", image: "/images/games/jackpots/diamond_strike.png" },
    { id: 4, title: "Jackpot Hunter", image: "/images/games/jackpots/jackpot_hunter.png" },
    { id: 5, title: "Rainforest Magic Bingo", image: "/images/games/jackpots/rainforest_magic_bingo.png" },
  ];

  const bookOfSlotsGames = [
    { id: 1, title: "Book of Atlas", image: "/images/games/book_of_slots/book_of_atlas.png" },
    { id: 2, title: "Book of Champions", image: "/images/games/book_of_slots/book_of_champions.png" },
    { id: 3, title: "Book of Dead", image: "/images/games/book_of_slots/book_of_dead.png" },
    { id: 4, title: "Book of Golden Joker", image: "/images/games/book_of_slots/book_of_golden_joker.png" },
    { id: 5, title: "Book of Light", image: "/images/games/book_of_slots/book_of_light.png" },
    { id: 6, title: "Book of Mystic", image: "/images/games/book_of_slots/book_of_mystic.png" },
    { id: 7, title: "Book of Ra", image: "/images/games/book_of_slots/book_of_ra.png" },
    { id: 8, title: "Book of Rest", image: "/images/games/book_of_slots/book_of_rest.png" },
    { id: 9, title: "Book of Sirens", image: "/images/games/book_of_slots/book_of_sirens.png" },
    { id: 10, title: "Book of the Divine", image: "/images/games/book_of_slots/book_of_the_divine.png" },
    { id: 11, title: "Book of Tut", image: "/images/games/book_of_slots/book_of_tut.png" },
    { id: 12, title: "Book of Vikings", image: "/images/games/book_of_slots/book_of_vikings.png" },
    { id: 13, title: "John Hunter and the Book of Tut", image: "/images/games/book_of_slots/john_hunter_and_the_book_of_tut.png" },
  ];

  return (
    <div>
      {/* Welcome Offer Banner */}
      <div className="mx-0 mt-px relative overflow-hidden aspect-video">
        <Image
          src="/banner.png"
          alt="Welcome Offer"
          width={1280}
          height={720}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <Button className="bg-[#ff3cac] hover:bg-[#ff3cac]/90 text-white px-6 py-2 rounded-full font-bold" asChild>
            <a href="/wallet">Deposit</a>
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

        <div ref={featuredRef} className="flex gap-1 overflow-x-auto scrollbar-hide pb-2">
          {featuredGames.map((game) => (
            <Card
              key={game.id}
              className="mt-1 ml-1 mr-1 mb-1 flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac] border-none"
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

        <div ref={topRef} className="flex gap-1 overflow-x-auto scrollbar-hide pb-2">
          {topGames.map((game) => (
            <Card
              key={game.id}
              className="mt-1 ml-1 mr-1 mb-1 flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac] border-none"
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

        <div ref={newRef} className="flex gap-1 overflow-x-auto scrollbar-hide pb-2">
          {newGames.map((game) => (
            <Card
              key={game.id}
              className="mt-1 ml-1 mr-1 mb-1 flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac] border-none"
            >
              <div className="relative aspect-[4/5]">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Crypto Games */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Crypto Games</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollLeft(cryptoRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollRight(cryptoRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div ref={cryptoRef} className="flex gap-1 overflow-x-auto scrollbar-hide pb-2">
          {cryptoGames.map((game) => (
            <Card
              key={game.id}
              className="mt-1 ml-1 mr-1 mb-1 flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac] border-none"
            >
              <div className="relative aspect-[4/5]">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Jackpots */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Jackpots</h2>
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

        <div ref={jackpotRef} className="flex gap-1 overflow-x-auto scrollbar-hide pb-2">
          {jackpotGames.map((game) => (
            <Card
              key={game.id}
              className="mt-1 ml-1 mr-1 mb-1 flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac] border-none"
            >
              <div className="relative aspect-[4/5]">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Book Of Slots */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Book Of Slots</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollLeft(bookRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollRight(bookRef)}
              className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div ref={bookRef} className="flex gap-1 overflow-x-auto scrollbar-hide pb-2">
          {bookOfSlotsGames.map((game) => (
            <Card
              key={game.id}
              className="mt-1 ml-1 mr-1 mb-1 flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac] border-none"
            >
              <div className="relative aspect-[4/5]">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom Gradient HR */}
      <div className="mt-10 px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>
      </div>

      {/* Contact Information */}
      <div className="mt-10 mb-20 px-4 text-center">
        <a href="https://t.me/TelBet_Demo_Bot" className="text-pink-400 text-sm hover:underline">
          @TelBet_Demo_Bot
        </a>
      </div>

    </div>
  );
}