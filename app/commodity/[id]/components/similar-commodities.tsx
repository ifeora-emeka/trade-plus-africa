"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SimilarItem {
  id: string
  name: string
  imageUrl: string
  region: string
  grade1Price: number
  grade1ChangePercent: number
  grade1IsPositive: boolean
  category: string
}

interface SimilarCommoditiesProps {
  commodities: SimilarItem[]
}

export function SimilarCommodities({ commodities }: SimilarCommoditiesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Similar Commodities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commodities.map((commodity) => (
            <Link key={commodity.id} href={`/commodity/${commodity.id}`}>
              <div className="p-4 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                    <Image
                      src={commodity.imageUrl}
                      alt={commodity.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{commodity.name}</h4>
                    <p className="text-xs text-gray-500">{commodity.region}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      ${commodity.grade1Price.toLocaleString()}
                    </div>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {commodity.category}
                    </Badge>
                  </div>
                  <div className={cn(
                    "flex items-center gap-1 text-sm font-medium",
                    commodity.grade1IsPositive ? "text-green-600" : "text-red-600"
                  )}>
                    {commodity.grade1IsPositive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {commodity.grade1ChangePercent > 0 ? "+" : ""}{commodity.grade1ChangePercent}%
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
