"use client"


import { Hero } from "@/components/hero"
import { PopularItems } from "@/components/popular-items"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      
      <Hero />
      <PopularItems />
    </div>
  )
}
