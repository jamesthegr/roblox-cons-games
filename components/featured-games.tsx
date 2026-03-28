"use client"

const games = [
  {
    id: 1,
    title: "Your Sus Gas Station Worker",
    description: "Work at the gas station in this interactive roleplay experience",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MZuKFd1mgO6Op8qi5tmOMhPgqKHtPE.png",
    redirectUrl: "https://www.robiox.com.py/games/15932212022/your-sus-gas-station-worker?privateServerLinkCode=439909404942835113814049442867",
  },
  {
    id: 2,
    title: "AI NPC Friends",
    description: "Chat and interact with AI-powered NPCs in this social experience",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x7EBpStiVaadtzv33wnQ4skcdahzp9.png",
    redirectUrl: "https://www.robiox.com.py/games/102168567330694/Character-Talk?privateServerLinkCode=439909404942835113814049442867",
  },
  {
    id: 3,
    title: "Neko Girl Town",
    description: "Explore a vibrant town filled with neko characters and adventures",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CJ47oBaCFWuH4nTgLT2V5bz3cZF20M.png",
    redirectUrl: "https://www.robiox.com.py/games/126018438287036/Neko-Girl-Town?privateServerLinkCode=439909404942835113814049442867",
  },
  {
    id: 4,
    title: "Weird Neko Untitled Game",
    description: "A unique and mysterious neko-themed adventure experience",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3KGj1YI9uE0ucJ823PWpM5e0xOvZPn.png",
    redirectUrl: "https://www.robiox.com.py/games/76106209840076/Weird-Neko-Untitled-Game?privateServerLinkCode=439909404942835113814049442867",
  },
]

export default function FeaturedGames() {
  const handlePlayNow = (redirectUrl: string) => {
    window.open(redirectUrl, "_blank")
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Games</h2>
          <p className="text-gray-400">Explore our collection of exclusive Roblox condo games</p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-red-900/40 border border-red-700/50 rounded-lg overflow-hidden hover:border-red-600 transition group"
            >
              {/* Game Image */}
              <div className="relative h-48 overflow-hidden bg-red-950">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Game Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{game.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{game.description}</p>
                <button
                  onClick={() => handlePlayNow(game.redirectUrl)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
                >
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
