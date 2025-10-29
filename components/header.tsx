"use client"
import Link from "next/link"

export default function Header() {
  return (
    <header className="relative z-50 border-b border-red-800/30 bg-red-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center font-bold text-white">
              🎮
            </div>
            <span className="text-xl font-bold">RobloxCondo</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-300 hover:text-white transition">
              Games
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition">
              Features
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition">
              Community
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
            Join Now
          </button>
        </div>
      </div>
    </header>
  )
}
