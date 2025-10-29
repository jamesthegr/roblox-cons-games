"use client"

export default function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Stats Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-red-900/50 border border-red-700/50 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm text-gray-300">Like 2401 Online Horny Players • 6 Active Games</span>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">ROBLOX</span>
            <br />
            <span className="text-red-500">CONDO GAMES</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover the ultimate collection of exclusive Roblox condo games. Join thousands of players in immersive
          experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2">
            ▶ Play Now
          </button>
          <button className="border border-gray-400 hover:border-white text-white px-8 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2">
            👥 Join Community
          </button>
        </div>
      </div>
    </section>
  )
}
