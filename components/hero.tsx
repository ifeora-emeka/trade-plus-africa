"use client"

import { SearchInput } from "@/components/search-input"

const HeroPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1200 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
        <stop offset="50%" stopColor="hsl(var(--chart-1))" stopOpacity="0.015" />
        <stop offset="100%" stopColor="hsl(var(--chart-2))" stopOpacity="0.02" />
      </linearGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#heroGradient)" />
    
    <g opacity="0.7">
      <path
        d="M-80 110 Q120 60, 380 130 Q620 200, 850 110 Q1050 20, 1320 80"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="1.2"
        fill="none"
        opacity="0.12"
        strokeLinecap="round"
      />
      
      <path
        d="M-120 270 Q180 190, 450 310 Q720 430, 920 280 Q1120 130, 1380 240"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.08"
        strokeLinecap="round"
      />
      
      <path
        d="M60 480 Q280 400, 580 520 Q880 640, 1080 460 Q1280 280, 1400 420"
        stroke="hsl(var(--chart-1))"
        strokeWidth="1.8"
        fill="none"
        opacity="0.10"
        strokeLinecap="round"
      />
      
      <path
        d="M-150 160 Q150 100, 420 180 Q690 260, 950 160 Q1200 60, 1450 140"
        stroke="hsl(var(--chart-2))"
        strokeWidth="1.0"
        fill="none"
        opacity="0.09"
        strokeLinecap="round"
      />
      
      <path
        d="M180 380 Q420 300, 720 400 Q1020 500, 1220 360 Q1350 260, 1500 340"
        stroke="hsl(var(--chart-3))"
        strokeWidth="1.4"
        fill="none"
        opacity="0.11"
        strokeLinecap="round"
      />
      
      <path
        d="M-200 50 Q80 -20, 360 70 Q640 160, 880 50 Q1120 -60, 1350 30"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="1.1"
        fill="none"
        opacity="0.07"
        strokeLinecap="round"
      />
      
      <path
        d="M20 550 Q320 470, 620 580 Q920 690, 1120 550 Q1320 410, 1450 530"
        stroke="hsl(var(--chart-4))"
        strokeWidth="1.6"
        fill="none"
        opacity="0.13"
        strokeLinecap="round"
      />
      
      <path
        d="M-250 220 Q50 140, 350 260 Q650 380, 950 220 Q1250 60, 1500 200"
        stroke="hsl(var(--chart-5))"
        strokeWidth="1.3"
        fill="none"
        opacity="0.09"
        strokeLinecap="round"
      />
    </g>
  </svg>
)

interface HeroProps {
  onSearch?: (query: string) => void
}

export function Hero({ onSearch }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <HeroPattern />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Nigeria's{" "}
              <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                export market
              </span>{" "}
              intelligence
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Track Nigerian commodity prices, analyze export trends, and make informed trading decisions
              with real-time market intelligence for Nigeria's non-oil exports.
            </p>
          </div>
          
          <div className="pt-4">
            <SearchInput onSearch={onSearch} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-1" />
              <span>Live Nigerian prices</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-2" />
              <span>Export forecasts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-3" />
              <span>Market analytics</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20 pointer-events-none" />
    </section>
  )
}