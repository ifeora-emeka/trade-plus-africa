"use client"

import { CommodityHeader } from "./components/commodity-header"
import { PriceTrendChart } from "./components/price-trend-chart"
import { MarketInsights } from "./components/market-insights"
import { ValidationMetrics } from "./components/validation-metrics"
import { SimilarCommodities } from "./components/similar-commodities"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const mockCommodityData = {
  name: "Cocoa Beans",
  imageUrl: "https://images.unsplash.com/photo-1545567724-9b16e57c906d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  region: "Cross River State",
  grade1Price: 2850,
  grade2Price: 2650,
  grade1Change: 125.50,
  grade2Change: 98.25,
  grade1ChangePercent: 4.6,
  grade2ChangePercent: 3.8,
  grade1IsPositive: true,
  grade2IsPositive: true,
  lastUpdate: "2 mins ago",
  volume: "12.5K tons",
  tradingRegions: ["Lagos Port", "Port Harcourt", "Calabar Port"]
}

const mockInsights = [
  {
    title: "Cross River Harvest Season",
    description: "Peak harvest season in Cross River State is driving increased cocoa supply from Nigerian farms, creating temporary price volatility in local markets.",
    impact: "neutral" as const,
    type: "seasonal" as const
  },
  {
    title: "Nigeria Export Incentives",
    description: "New government export incentives and improved port facilities in Lagos are enhancing Nigeria's competitiveness in global cocoa markets.",
    impact: "positive" as const,
    type: "policy" as const
  },
  {
    title: "International Chocolate Demand",
    description: "Rising chocolate consumption in Europe and Asia continues to drive strong demand for premium Nigerian cocoa beans.",
    impact: "positive" as const,
    type: "demand" as const
  },
  {
    title: "Weather Patterns",
    description: "Irregular rainfall patterns in Nigerian cocoa-growing states may impact next quarter's production forecasts.",
    impact: "negative" as const,
    type: "supply" as const
  }
]

const mockSimilarCommodities = [
  {
    id: "coffee-beans",
    name: "Coffee Beans",
    imageUrl: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D",
    region: "Taraba State",
    grade1Price: 5800,
    grade1ChangePercent: 4.3,
    grade1IsPositive: true,
    category: "Beverages"
  },
  {
    id: "cashew-nuts",
    name: "Cashew Nuts",
    imageUrl: "https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzaGV3JTIwbnV0c3xlbnwwfHwwfHx8MA%3D%3D",
    region: "Kwara State",
    grade1Price: 4200,
    grade1ChangePercent: 4.5,
    grade1IsPositive: true,
    category: "Nuts & Seeds"
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds",
    imageUrl: "https://images.unsplash.com/photo-1594999791332-48843eebd9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VzYW1lJTIwc2VlZHN8ZW58MHx8MHx8fDA%3D",
    region: "Benue State",
    grade1Price: 1650,
    grade1ChangePercent: -2.8,
    grade1IsPositive: false,
    category: "Oil Seeds"
  },
  {
    id: "ginger",
    name: "Ginger",
    imageUrl: "https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2luZ2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
    region: "Kaduna State",
    grade1Price: 3200,
    grade1ChangePercent: -2.1,
    grade1IsPositive: false,
    category: "Spices"
  },
  {
    id: "palm-oil",
    name: "Palm Oil",
    imageUrl: "https://images.unsplash.com/photo-1596752837587-c75150cf66f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcGFsbSUyMHNlZWR8ZW58MHx8MHx8fDA%3D",
    region: "Rivers State",
    grade1Price: 980,
    grade1ChangePercent: 1.6,
    grade1IsPositive: true,
    category: "Oils"
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    region: "Ogun State",
    grade1Price: 6500,
    grade1ChangePercent: 2.3,
    grade1IsPositive: true,
    category: "Spices"
  }
]

export default function CommodityDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="space-y-8">
          <CommodityHeader
            name={mockCommodityData.name}
            imageUrl={mockCommodityData.imageUrl}
            region={mockCommodityData.region}
            grade1Price={mockCommodityData.grade1Price}
            grade2Price={mockCommodityData.grade2Price}
            grade1Change={mockCommodityData.grade1Change}
            grade2Change={mockCommodityData.grade2Change}
            grade1ChangePercent={mockCommodityData.grade1ChangePercent}
            grade2ChangePercent={mockCommodityData.grade2ChangePercent}
            grade1IsPositive={mockCommodityData.grade1IsPositive}
            grade2IsPositive={mockCommodityData.grade2IsPositive}
            lastUpdate={mockCommodityData.lastUpdate}
            volume={mockCommodityData.volume}
            tradingRegions={mockCommodityData.tradingRegions}
          />

          <PriceTrendChart />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MarketInsights insights={mockInsights} />
            <ValidationMetrics
              accuracy={87.3}
              confidenceInterval={5.2}
              lastValidation="Yesterday at 11:30 PM"
              forecastReliability="high"
            />
          </div>

          <SimilarCommodities commodities={mockSimilarCommodities} />
        </div>
      </div>
    </div>
  )
}
