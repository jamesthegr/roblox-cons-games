"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedGames from "@/components/featured-games"
import WhyChooseUs from "@/components/why-choose-us"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-red-950 text-white overflow-hidden">
      <ParticleBackground />
      <Header />
      <Hero />
      <FeaturedGames />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
