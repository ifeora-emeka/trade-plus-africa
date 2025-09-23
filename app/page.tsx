"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PopularItems } from "@/components/popular-items"

export default function HomePage() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero onSearch={handleSearch} />
      <PopularItems />
    </div>
  )
}
