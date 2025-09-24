"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PopularItems } from "@/components/popular-items"

export default function HomePage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkLogin = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true"
      setIsLoggedIn(loggedIn)
      if (!loggedIn) {
        router.push("/login")
      }
    }

    // Check on mount
    checkLogin()

    // Listen for login/logout changes across the app
    window.addEventListener("storage", checkLogin)

    return () => {
      window.removeEventListener("storage", checkLogin)
    }
  }, [router])

  if (!isLoggedIn) return null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PopularItems />
    </div>
  )
}
