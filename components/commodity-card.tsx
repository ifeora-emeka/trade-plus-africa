"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface CommodityCardProps {
  name: string
  grade1Price: number
  grade2Price: number
  grade1Change: number
  grade2Change: number
  grade1ChangePercent: number
  grade2ChangePercent: number
  lastUpdate: string
  volume: string
  region: string
  imageUrl: string
  grade1IsPositive: boolean
  grade2IsPositive: boolean
}

export function CommodityCard({
  name,
  grade1Price,
  grade2Price,
  grade1Change,
  grade2Change,
  grade1ChangePercent,
  grade2ChangePercent,
  lastUpdate,
  volume,
  region,
  imageUrl,
  grade1IsPositive,
  grade2IsPositive
}: CommodityCardProps) {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center h-32">
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="128px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          </div>

          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{region}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{lastUpdate}</span>
                </div>

                <div className="text-xs text-muted-foreground">
                  Volume: <span className="font-medium">{volume}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Grade 1</span>
                    <Badge 
                      variant={grade1IsPositive ? "default" : "destructive"} 
                      className={cn(
                        "flex items-center gap-1 text-xs font-medium px-2 py-1",
                        grade1IsPositive 
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                          : "bg-red-500/10 text-red-600 border-red-500/20"
                      )}
                    >
                      {grade1IsPositive ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {Math.abs(grade1ChangePercent).toFixed(1)}%
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xl font-bold text-foreground">
                      ${grade1Price.toLocaleString()}
                    </p>
                    <p className={cn(
                      "text-sm font-medium",
                      grade1IsPositive ? "text-emerald-600" : "text-red-600"
                    )}>
                      {grade1IsPositive ? "+" : ""}{grade1Change.toFixed(2)} USD
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Grade 2</span>
                    <Badge 
                      variant={grade2IsPositive ? "default" : "destructive"} 
                      className={cn(
                        "flex items-center gap-1 text-xs font-medium px-2 py-1",
                        grade2IsPositive 
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                          : "bg-red-500/10 text-red-600 border-red-500/20"
                      )}
                    >
                      {grade2IsPositive ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {Math.abs(grade2ChangePercent).toFixed(1)}%
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xl font-bold text-foreground">
                      ${grade2Price.toLocaleString()}
                    </p>
                    <p className={cn(
                      "text-sm font-medium",
                      grade2IsPositive ? "text-emerald-600" : "text-red-600"
                    )}>
                      {grade2IsPositive ? "+" : ""}{grade2Change.toFixed(2)} USD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-4">
          <div className="grid grid-cols-2 gap-2">
            <div className={cn(
              "h-1 rounded-full transition-all duration-500 group-hover:h-1.5",
              grade1IsPositive 
                ? "bg-gradient-to-r from-emerald-500/30 to-emerald-500" 
                : "bg-gradient-to-r from-red-500/30 to-red-500"
            )} />
            <div className={cn(
              "h-1 rounded-full transition-all duration-500 group-hover:h-1.5",
              grade2IsPositive 
                ? "bg-gradient-to-r from-emerald-500/30 to-emerald-500" 
                : "bg-gradient-to-r from-red-500/30 to-red-500"
            )} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}