"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const TradePulseLogo = () => (
  <svg
    width="160"
    height="40"
    viewBox="0 0 160 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-auto"
  >
    <g>
      <circle cx="20" cy="20" r="18" fill="currentColor" className="text-primary" />
      <path
        d="M12 15l6 6 6-6M12 25l6-6 6 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <text
      x="45"
      y="16"
      fill="currentColor"
      className="text-foreground font-semibold"
      fontSize="14"
      fontFamily="system-ui"
    >
      TradePulse
    </text>
    <text
      x="45"
      y="28"
      fill="currentColor"
      className="text-muted-foreground"
      fontSize="10"
      fontFamily="system-ui"
    >
      AFRICA
    </text>
  </svg>
)

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <TradePulseLogo />
          </Link>
          
          <nav className="flex items-center space-x-4">
            <Button variant="default" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}