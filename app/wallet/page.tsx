"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowDown, ArrowUp, Copy } from "lucide-react";

export default function WalletPage() {
  const [tab, setTab] = useState<"deposit" | "withdraw">("deposit");
  const [amount, setAmount] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const address =
    "EQC1234567890abcdef1234567890abcdef1234567890abcdef1234567890";
  const tag = "654321";

  useEffect(() => {
    if (!showAlert) return;
    const timer = setTimeout(() => setShowAlert(false), 5000);
    return () => clearTimeout(timer);
  }, [showAlert]);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <main className="p-4 flex flex-col gap-4">
      <div className="flex">
        <Button
          onClick={() => setTab("deposit")}
          className={`flex-1 rounded-md bg-black/30 hover:bg-black/30 text-white ${tab === "deposit" && "bg-[#ff3cac] hover:bg-[#ff3cac] bg-opacity-100"}`}
        >
          <ArrowDown className="mr-2 h-4 w-4" /> Deposit
        </Button>
        <Button
          onClick={() => setTab("withdraw")}
          className={`flex-1 rounded-md bg-black/30 hover:bg-black/30 text-white ${tab === "withdraw" && "bg-[#ff3cac] hover:bg-[#ff3cac] bg-opacity-100"}`}
        >
          <ArrowUp className="mr-2 h-4 w-4" /> Withdraw
        </Button>
      </div>

      {tab === "deposit" && (
        <div className="flex flex-col gap-4">
          <p className="opacity-70">Select the token to deposit (Min 0.1 TON)</p>
          <Select value="TON" disabled>
            <SelectTrigger className="w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-sm text-white">
              <SelectValue placeholder="Token" />
            </SelectTrigger>
            <SelectContent className="bg-black backdrop-blur-lg bg-opacity-50 text-white font-bold rounded-md border-pink-500/50">
              <SelectItem value="TON">Toncoin (TON)</SelectItem>
              <SelectItem value="USDT">Tether (USDT)</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col gap-2">
            <p className="opacity-70">TON deposit address</p>
            <div className="relative">
              <Input
                readOnly
                value={address}
                className="w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-sm text-white pr-10"
              />
              <Button
                size="icon"
                variant="ghost"
                onClick={() => copy(address)}
                className="absolute right-0 top-0 h-full"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="opacity-70">Destination tag</p>
            <div className="relative">
              <Input
                readOnly
                value={tag}
                className="w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-sm text-white pr-10"
              />
              <Button
                size="icon"
                variant="ghost"
                onClick={() => copy(tag)}
                className="absolute right-0 top-0 h-full"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <p className="text-sm opacity-70">
            Send only TON to this deposit address.<br />Values sent below the
            minimum amount or to incorrect address will be lost.
          </p>
        </div>
      )}

      {tab === "withdraw" && (
        <div className="flex flex-col gap-4">
          <p className="opacity-70">Select the token to withdraw (Min 0.1 TON)</p>
          <Select value="TON" disabled>
            <SelectTrigger className="w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-sm text-white">
              <SelectValue placeholder="Token" />
            </SelectTrigger>
            <SelectContent className="bg-black backdrop-blur-lg bg-opacity-50 text-white font-bold rounded-md border-pink-500/50">
              <SelectItem value="TON">Toncoin (TON)</SelectItem>
              <SelectItem value="USDT">Tether (USDT)</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col gap-2">
            <p className="opacity-70">Your withdrawal address</p>
            <Input
              placeholder="Withdraw address"
              className="w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-sm text-white placeholder:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="opacity-70">Destination tag</p>
            <Input
              placeholder="Your destination tag"
              className="w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-sm text-white placeholder:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="opacity-70">Amount</p>
            <div className="relative">
              <Input
                placeholder="Enter an amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border-none bg-black backdrop-blur-md bg-opacity-30 rounded-sm text-white placeholder:opacity-50"
              />
              <Button
                variant="ghost"
                className="absolute right-0 top-0 h-full px-3 text-sm"
                onClick={() => setAmount("0")}
              >
                Max
              </Button>
            </div>
          </div>

          <Button
            className="bg-[#ff3cac] hover:bg-[#ff3cac]/90 text-white"
            onClick={() => setShowAlert(true)}
          >
            Withdraw
          </Button>

          {showAlert && (
            <div className="relative mt-2 rounded-md bg-red-600 p-4 text-white">
              <button
                className="absolute right-2 top-2"
                onClick={() => setShowAlert(false)}
              >
                ×
              </button>
              <p>
                Withdraw unsuccessful.<br />Please check your withdraw address and
                amount.
              </p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
