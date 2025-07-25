"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Users, DollarSign, Percent } from "lucide-react";
import useBotEnv from "@/hooks/useBotEnv";

export default function EarnPage() {
  const { BOT_USERNAME } = useBotEnv();
  const affiliate = `https://t.me/${BOT_USERNAME}`;

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <main>
      <div className="relative aspect-[90/31] w-full overflow-hidden rounded-none">
        <Image
          src="/earn.webp"
          alt="Earn banner"
          fill
          className="object-cover opacity-70"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="opacity-70">Your affiliate link</p>
          <div className="relative">
            <div className="flex items-center px-3 py-4 w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-lg text-white pr-3">
              {affiliate}
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => copy(affiliate)}
              className="absolute right-0 top-0 h-full"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="h-2" />

        <p className="opacity-70">Statistics</p>

        <div className="flex flex-col gap-2">
          <div className="flex items-center px-3 py-3 w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-lg text-white pr-3">
            <Users className="mr-2 h-4 w-4 opacity-70" />
            <span className="opacity-70">Invited users:</span>
            <span className="ml-auto">0</span>
          </div>

          <div className="flex items-center px-3 py-3 w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-lg text-white pr-3">
            <DollarSign className="mr-2 h-4 w-4 opacity-70" />
            <span className="opacity-70">Referrals wagered:</span>
            <span className="ml-auto">$0.00</span>
          </div>

          <div className="flex items-center px-3 py-3 w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-lg text-white pr-3">
            <Percent className="mr-2 h-4 w-4 opacity-70" />
            <span className="opacity-70">Your commission:</span>
            <span className="ml-auto">$0.00</span>
          </div>
        </div>
      </div>
    </main>
  );
}
