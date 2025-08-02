"use client";

import { useEffect, useRef, useState } from "react";
import useBotEnv from "@/hooks/useBotEnv";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Game {
  code: string;
  title: string;
  image: string;
}

interface Section {
  title: string;
  games: Game[];
}

export default function Component() {
  const { BOT_USERNAME } = useBotEnv();
  const [sections, setSections] = useState<Section[]>([]);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setSections(data.sections || []))
      .catch(() => {});
  }, []);

  const scrollLeft = (title: string) => {
    sectionRefs.current[title]?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = (title: string) => {
    sectionRefs.current[title]?.scrollBy({ left: 150, behavior: "smooth" });
  };

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

      {sections.map((section) => (
        <div key={section.title} className="mt-6 px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">{section.title}</h2>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollLeft(section.title)}
                className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollRight(section.title)}
                className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div
            ref={(el) => (sectionRefs.current[section.title] = el)}
            className="flex gap-1 overflow-x-auto scrollbar-hide pb-2"
          >
            {section.games.map((game) => (
              <Link key={game.code} href={`/game?code=${encodeURIComponent(game.code)}`}>
                <Card className="mt-1 ml-1 mr-1 mb-1 flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 rounded-xl overflow-hidden bg-purple-800 transition-shadow hover:ring-2 hover:ring-pink-500 hover:shadow-[0_0_10px_#ff3cac] border-none">
                  <div className="relative aspect-[4/5]">
                    <Image src={game.image} alt={game.title} fill className="object-cover" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Custom Gradient HR */}
      <div className="mt-10 px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>
      </div>

      {/* Contact Information */}
      <div className="mt-10 mb-20 px-4 text-center">
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
