"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LogoutButton } from "./Logout"
import Link from "next/link"

const TradePulseLogo = () => (
  <svg
    width="200"
    height="48"
    viewBox="0 0 200 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-auto"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="50%" stopColor="hsl(var(--chart-1))" />
        <stop offset="100%" stopColor="hsl(var(--chart-2))" />
      </linearGradient>
      <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1"/>
      </filter>
    </defs>
    
    <g filter="url(#logoShadow)">
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="12"
        fill="url(#logoGradient)"
        stroke="hsl(var(--border))"
        strokeWidth="0.5"
      />
      
      <g transform="translate(24, 24)">
        <g opacity="0.9">
          <path
            d="M-12 -8 Q-6 -10, 0 -8 Q6 -6, 12 -8"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-12 -2 Q-6 -4, 0 -2 Q6 0, 12 -2"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-12 4 Q-6 2, 0 4 Q6 6, 12 4"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        
        <g opacity="0.8">
          <circle cx="-14" cy="-8" r="2" fill="white" />
          <circle cx="14" cy="-2" r="2" fill="white" />
          <circle cx="-14" cy="4" r="2" fill="white" />
        </g>
        
        <g opacity="0.6">
          <path
            d="M-8 -14 Q-2 -16, 4 -14 Q10 -12, 16 -14"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-8 10 Q-2 12, 4 10 Q10 8, 16 10"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </g>
    </g>
    
    <g transform="translate(54, 0)">
      <text
        x="0"
        y="22"
        fill="hsl(var(--foreground))"
        className="font-bold"
        fontSize="18"
        fontFamily="system-ui"
        letterSpacing="-0.5px"
      >
        TradePulse
      </text>
      <text
        x="0"
        y="38"
        fill="hsl(var(--muted-foreground))"
        className="font-semibold"
        fontSize="12"
        fontFamily="system-ui"
        letterSpacing="2px"
      >
        NIGERIA
      </text>
      
      <rect
        x="0"
        y="26"
        width="110"
        height="1"
        fill="url(#logoGradient)"
        opacity="0.3"
      />
    </g>
  </svg>
)


export function Header() {
   const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check the auth cookie on mount
  useEffect(() => {
    const authCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth-ui="))
    setIsLoggedIn(authCookie?.split("=")[1] === "true")
  }, [])
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <TradePulseLogo />
          </Link>

          <nav className="flex items-center space-x-4">
       
       {isLoggedIn && (
          <LogoutButton
            onLogout={() => {
              // clear cookie already handled in LogoutButton
              setIsLoggedIn(false) // update local state
            }}
          />
        )}
</nav>

        </div>
      </div>
    </header>
  )
}