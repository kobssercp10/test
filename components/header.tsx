"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [balance] = useState("0.00000");
  return (
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
      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full overflow-hidden p-0">
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
