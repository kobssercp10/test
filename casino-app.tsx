"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Home, Search, Gift, Wallet, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [balance] = useState("0.00000")

  const featuredGames = [
    { id: 1, title: "LUCKY TIGER", image: "/placeholder.svg?height=120&width=80" },
    { id: 2, title: "GATES OF OLYMPUS", image: "/placeholder.svg?height=120&width=80" },
    { id: 3, title: "SWEET BONANZA 1000", image: "/placeholder.svg?height=120&width=80" },
    { id: 4, title: "BUFFALO", image: "/placeholder.svg?height=120&width=80" },
    { id: 5, title: "BOOK OF DEAD", image: "/placeholder.svg?height=120&width=80" },
    { id: 6, title: "STARBURST", image: "/placeholder.svg?height=120&width=80" },
    { id: 7, title: "GONZO'S QUEST", image: "/placeholder.svg?height=120&width=80" },
    { id: 8, title: "MEGA MOOLAH", image: "/placeholder.svg?height=120&width=80" },
  ]

  const topGames = [
    { id: 1, title: "GATES OF OLYMPUS", image: "/placeholder.svg?height=120&width=80" },
    { id: 2, title: "BIG BASS BONANZA", image: "/placeholder.svg?height=120&width=80" },
    { id: 3, title: "JOHN HUNTER", image: "/placeholder.svg?height=120&width=80" },
    { id: 4, title: "BIG BASS SPLASH", image: "/placeholder.svg?height=120&width=80" },
    { id: 5, title: "WOLF GOLD", image: "/placeholder.svg?height=120&width=80" },
    { id: 6, title: "THE DOG HOUSE", image: "/placeholder.svg?height=120&width=80" },
    { id: 7, title: "RAZOR SHARK", image: "/placeholder.svg?height=120&width=80" },
    { id: 8, title: "FIRE JOKER", image: "/placeholder.svg?height=120&width=80" },
  ]

  const newGames = [
    { id: 1, title: "CRYSTAL CAVERNS", image: "/placeholder.svg?height=120&width=80" },
    { id: 2, title: "PIRATE GOLD", image: "/placeholder.svg?height=120&width=80" },
    { id: 3, title: "AZTEC GEMS", image: "/placeholder.svg?height=120&width=80" },
    { id: 4, title: "WILD WEST GOLD", image: "/placeholder.svg?height=120&width=80" },
    { id: 5, title: "FRUIT PARTY", image: "/placeholder.svg?height=120&width=80" },
    { id: 6, title: "SUGAR RUSH", image: "/placeholder.svg?height=120&width=80" },
    { id: 7, title: "MAGIC JOURNEY", image: "/placeholder.svg?height=120&width=80" },
    { id: 8, title: "DRAGON KINGDOM", image: "/placeholder.svg?height=120&width=80" },
  ]

  const jackpotGames = [
    { id: 1, title: "DIVINE FORTUNE", image: "/placeholder.svg?height=120&width=80" },
    { id: 2, title: "HALL OF GODS", image: "/placeholder.svg?height=120&width=80" },
    { id: 3, title: "ARABIAN NIGHTS", image: "/placeholder.svg?height=120&width=80" },
    { id: 4, title: "COSMIC FORTUNE", image: "/placeholder.svg?height=120&width=80" },
    { id: 5, title: "TREASURE NILE", image: "/placeholder.svg?height=120&width=80" },
    { id: 6, title: "KING CASHALOT", image: "/placeholder.svg?height=120&width=80" },
    { id: 7, title: "MAJOR MILLIONS", image: "/placeholder.svg?height=120&width=80" },
    { id: 8, title: "CASH SPLASH", image: "/placeholder.svg?height=120&width=80" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-lg">Crashino</span>
        </div>

        <div className="flex items-center gap-2 bg-black/30 rounded-full px-3 py-1">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">₮</span>
          </div>
          <span className="text-sm font-medium">{balance}</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full overflow-hidden p-0">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </Button>
      </div>

      {/* Welcome Offer Banner */}
      <div className="mx-4 mt-4 relative overflow-hidden rounded-2xl">
        <div className="relative h-48">
          <Image src="/placeholder.svg?height=192&width=400" alt="Welcome Banner" fill className="object-cover" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full font-bold">
              Deposit
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Games */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Featured</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {featuredGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-24 bg-gradient-to-b from-purple-700 to-purple-800 border-purple-600 overflow-hidden"
            >
              <div className="aspect-[3/4] relative">
                <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs font-bold leading-tight">{game.title}</p>
                </div>
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
            <Button variant="ghost" size="icon" className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {topGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-24 bg-gradient-to-b from-purple-700 to-purple-800 border-purple-600 overflow-hidden"
            >
              <div className="aspect-[3/4] relative">
                <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs font-bold leading-tight">{game.title}</p>
                </div>
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
            <Button variant="ghost" size="icon" className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {newGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-24 bg-gradient-to-b from-purple-700 to-purple-800 border-purple-600 overflow-hidden"
            >
              <div className="aspect-[3/4] relative">
                <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs font-bold leading-tight">{game.title}</p>
                </div>
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
            <Button variant="ghost" size="icon" className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {jackpotGames.map((game) => (
            <Card
              key={game.id}
              className="flex-shrink-0 w-24 bg-gradient-to-b from-purple-700 to-purple-800 border-purple-600 overflow-hidden"
            >
              <div className="aspect-[3/4] relative">
                <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs font-bold leading-tight">{game.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-purple-700/50">
        <div className="flex items-center justify-around py-2">
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-white p-2">
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-400 p-2">
            <Search className="w-5 h-5" />
            <span className="text-xs">Search</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-400 p-2">
            <Gift className="w-5 h-5" />
            <span className="text-xs">Offers</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-400 p-2">
            <Wallet className="w-5 h-5" />
            <span className="text-xs">Wallet</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-400 p-2">
            <DollarSign className="w-5 h-5" />
            <span className="text-xs">Earn</span>
          </Button>
        </div>
      </div>

      {/* Spacer for bottom navigation */}
      <div className="h-20"></div>
    </div>
  )
}
