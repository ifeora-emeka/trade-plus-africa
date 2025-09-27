"use client"

import { Header } from "@/components/header"
import { SearchInput } from "@/components/search-input"
import { CommodityCard } from "@/components/commodity-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, SearchIcon } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

// keep your allCommodities array here\
const allCommodities = [
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
    region: "Cross River State",
    imageUrl: "https://images.unsplash.com/photo-1545567724-9b16e57c906d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grade1IsPositive: true,
    grade2IsPositive: true,
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
    region: "Benue State",
    imageUrl: "https://images.unsplash.com/photo-1594999791332-48843eebd9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VzYW1lJTIwc2VlZHN8ZW58MHx8MHx8fDA%3D",
    grade1IsPositive: false,
    grade2IsPositive: false,
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
    region: "Kwara State",
    imageUrl: "https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzaGV3JTIwbnV0c3xlbnwwfHwwfHx8MA%3D%3D",
    grade1IsPositive: true,
    grade2IsPositive: false,
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
    region: "Rivers State",
    imageUrl: "https://images.unsplash.com/photo-1596752837587-c75150cf66f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcGFsbSUyMHNlZWR8ZW58MHx8MHx8fDA%3D",
    grade1IsPositive: true,
    grade2IsPositive: true,
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
    region: "Kaduna State",
    imageUrl: "https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2luZ2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
    grade1IsPositive: false,
    grade2IsPositive: true,
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
    region: "Taraba State",
    imageUrl: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D",
    grade1IsPositive: true,
    grade2IsPositive: true,
  },
  {
    name: "Black Pepper",
    grade1Price: 6500,
    grade2Price: 6000,
    grade1Change: 150.20,
    grade2Change: 120.80,
    grade1ChangePercent: 2.3,
    grade2ChangePercent: 2.0,
    lastUpdate: "6 mins ago",
    volume: "2.1K tons",
    region: "Ogun State",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    grade1IsPositive: true,
    grade2IsPositive: true,
  },
  {
    name: "Yam",
    grade1Price: 1200,
    grade2Price: 950,
    grade1Change: -25.40,
    grade2Change: -18.60,
    grade1ChangePercent: -2.1,
    grade2ChangePercent: -1.9,
    lastUpdate: "7 mins ago",
    volume: "45.3K tons",
    region: "Oyo State",
    imageUrl: "https://images.unsplash.com/photo-1608618695465-7e64e60c2c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    grade1IsPositive: false,
    grade2IsPositive: false,
  }
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
   const filteredCommodities = useMemo(() => {
      if (!query.trim()) return allCommodities
  
      return allCommodities.filter((commodity) =>
        commodity.name.toLowerCase().includes(query.toLowerCase()) ||
        commodity.region.toLowerCase().includes(query.toLowerCase())
      )
    }, [query])

  return (
     <div className="min-h-screen bg-background">
       <Header />
 
       <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
         <div className="container mx-auto px-4 py-6">
           <div className="flex items-center gap-4 mb-4">
             <Link href="/">
               <Button variant="outline" size="sm">
                 <ArrowLeft className="w-4 h-4 mr-2" />
                 Back to Home
               </Button>
             </Link>
           </div>
 
           <SearchInput
             defaultValue={query}
             placeholder="Search for commodities..."
             onSearch={(newQuery) => {
               window.location.href = `/search?query=${encodeURIComponent(newQuery)}`
             }}
           />
         </div>
       </div>
 
       <div className="container mx-auto px-4 py-8">
         <div className="space-y-6">
           <div className="flex items-center justify-between">
             <div>
               <h1 className="text-2xl font-bold text-foreground">
                 {query ? `Search results for "${query}"` : "All Commodities"}
               </h1>
               <p className="text-muted-foreground mt-1">
                 {filteredCommodities.length} {filteredCommodities.length === 1 ? "result" : "results"} found
               </p>
             </div>
           </div>
 
           {filteredCommodities.length > 0 ? (
             <div className="w-full border border-border/50 rounded-lg overflow-hidden">
               <div className="hidden md:grid md:grid-cols-7 bg-muted/40 text-muted-foreground text-sm font-medium py-3 px-4 border-b border-border/50">
                 <div>Commodity</div>
                 <div>Grade 1 Price</div>
                 <div>Grade 1 %</div>
                 <div>Grade 1 Change</div>
                 <div>Grade 2 Price</div>
                 <div>Grade 2 %</div>
                 <div>Volume</div>
               </div>
 
               <div className="divide-y divide-border/50">
                 {filteredCommodities.map((commodity) => (
                   <CommodityCard key={commodity.name} {...commodity} />
                 ))}
               </div>
             </div>
           ) : (
             <div className="text-center py-12">
               <div className="text-muted-foreground mb-4">
                 <SearchIcon className="mx-auto h-12 w-12 text-muted-foreground/50"/>
               </div>
               <h3 className="text-lg font-medium text-foreground mb-2">No results found</h3>
               <p className="text-muted-foreground mb-4">
                 Try searching with different keywords or browse all commodities.
               </p>
               <Button
                 onClick={() => window.location.href = "/search"}
                 variant="outline"
               >
                 Clear search
               </Button>
             </div>
           )}
         </div>
       </div>
     </div>
   )
 }
 

