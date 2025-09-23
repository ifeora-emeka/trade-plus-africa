"use client"

import { CommodityCard } from "@/components/commodity-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

const popularCommodities = [
  {
    name: "Cocoa Beans",
    grade1Price: 2850,
    grade2Price: 2650,
    grade1Change: 125.50,
    grade2Change: 98.25,
    grade1ChangePercent: 4.6,
    grade2ChangePercent: 3.8,
    lastUpdate: "2 mins ago",
    volume: "12.5K tons",
    region: "West Africa",
    imageUrl: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=400&h=300&fit=crop&crop=center",
    grade1IsPositive: true,
    grade2IsPositive: true
  },
  {
    name: "Sesame Seeds",
    grade1Price: 1650,
    grade2Price: 1450,
    grade1Change: -45.25,
    grade2Change: -28.50,
    grade1ChangePercent: -2.8,
    grade2ChangePercent: -2.0,
    lastUpdate: "5 mins ago",
    volume: "8.2K tons",
    region: "East Africa",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    grade1IsPositive: false,
    grade2IsPositive: false
  },
  {
    name: "Cashew Nuts",
    grade1Price: 4200,
    grade2Price: 3800,
    grade1Change: 180.75,
    grade2Change: -45.30,
    grade1ChangePercent: 4.5,
    grade2ChangePercent: -1.2,
    lastUpdate: "1 min ago",
    volume: "6.8K tons",
    region: "West Africa",
    imageUrl: "https://images.unsplash.com/photo-1508367163-b5ddbc762aad?w=400&h=300&fit=crop&crop=center",
    grade1IsPositive: true,
    grade2IsPositive: false
  },
  {
    name: "Palm Oil",
    grade1Price: 980,
    grade2Price: 850,
    grade1Change: 15.30,
    grade2Change: 22.10,
    grade1ChangePercent: 1.6,
    grade2ChangePercent: 2.7,
    lastUpdate: "8 mins ago",
    volume: "25.1K tons",
    region: "Central Africa",
    imageUrl: "https://images.unsplash.com/photo-1605367269627-4822247d8f51?w=400&h=300&fit=crop&crop=center",
    grade1IsPositive: true,
    grade2IsPositive: true
  },
  {
    name: "Ginger",
    grade1Price: 3200,
    grade2Price: 2900,
    grade1Change: -65.80,
    grade2Change: 35.20,
    grade1ChangePercent: -2.1,
    grade2ChangePercent: 1.2,
    lastUpdate: "3 mins ago",
    volume: "4.5K tons",
    region: "West Africa",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop&crop=center",
    grade1IsPositive: false,
    grade2IsPositive: true
  },
  {
    name: "Coffee Beans",
    grade1Price: 5800,
    grade2Price: 5200,
    grade1Change: 240.60,
    grade2Change: 198.40,
    grade1ChangePercent: 4.3,
    grade2ChangePercent: 3.9,
    lastUpdate: "4 mins ago",
    volume: "18.7K tons",
    region: "East Africa",
    imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop&crop=center",
    grade1IsPositive: true,
    grade2IsPositive: true
  }
]

export function PopularItems() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Market Spotlight</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Most Popular{" "}
              <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                Commodities
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time prices and trends for Africa's top non-oil export commodities. 
              Track market movements and make informed trading decisions.
            </p>
          </div>

          <div className="space-y-6">
            {popularCommodities.map((commodity, index) => (
              <CommodityCard
                key={commodity.name}
                {...commodity}
              />
            ))}
          </div>

          <div className="text-center pt-8">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
            >
              View All Commodities
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-chart-1/5 to-chart-2/5 rounded-2xl p-8 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Commodities Tracked</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-foreground">25</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">African Countries</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-foreground">99.8%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Data Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}