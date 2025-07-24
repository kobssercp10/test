"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Wallet, DollarSign, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Search", icon: Search },
  { href: "/wallet", label: "Wallet", icon: Wallet },
  { href: "/earn", label: "Earn", icon: DollarSign },
  { href: "/profile", label: "Profile", icon: User },
];

export default function FooterNav() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-purple-700/50">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Button
            key={href}
            asChild
            variant="ghost"
            className={`flex flex-col items-center gap-1 p-2 ${pathname === href ? "text-[#ff3cac] drop-shadow-[0_0_6px_#ff3cac]" : "text-gray-400"}`}
          >
            <Link href={href}>
              <Icon className="w-5 h-5" />
              <span className="text-xs">{label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
