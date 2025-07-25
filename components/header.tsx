"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [balance] = useState("0.000");
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-black/20 backdrop-blur-md">
      <div className="flex items-center gap-2">
          <Image src="/telbet_logo.svg" alt="TelBet Logo" width={32} height={32} />
        <span className="font-bold text-lg">TelBet</span>
      </div>
      <div className="flex items-center gap-1 bg-black/30 rounded-full px-3 py-1 ml-auto">
        <Image src="/ton.svg" alt="TON" width={18} height={18}/>
        <span className="text-sm font-medium">{balance}</span>
      </div>
      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full overflow-hidden p-0 ml-3">
        <Image
          src="https://placehold.co/40x40"
          alt="Profile"
          width={40}
          height={40}
          className="object-cover"
        />
      </Button>
    </div>
  );
}
