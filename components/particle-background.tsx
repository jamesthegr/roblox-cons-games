"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Create large circles
    const circles: Array<{
      x: number
      y: number
      radius: number
      opacity: number
    }> = [
      { x: canvas.width * 0.2, y: canvas.height * 0.4, radius: 200, opacity: 0.1 },
      { x: canvas.width * 0.8, y: canvas.height * 0.6, radius: 250, opacity: 0.08 },
      { x: canvas.width * 0.5, y: canvas.height * 0.8, radius: 300, opacity: 0.06 },
    ]

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw large circles
      circles.forEach((circle) => {
        ctx.strokeStyle = `rgba(239, 68, 68, ${circle.opacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}
