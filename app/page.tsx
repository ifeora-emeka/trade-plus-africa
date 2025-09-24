"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PopularItems } from "@/components/popular-items"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PopularItems />
      
    </div>
  )
}
