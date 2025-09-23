"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertTriangle, Info } from "lucide-react"

interface MarketInsightsProps {
  insights: {
    title: string
    description: string
    impact: "positive" | "negative" | "neutral"
    type: "seasonal" | "policy" | "demand" | "supply"
  }[]
}

export function MarketInsights({ insights }: MarketInsightsProps) {
  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "positive":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "negative":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <Info className="w-4 h-4 text-blue-600" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "seasonal":
        return "bg-orange-100 text-orange-800"
      case "policy":
        return "bg-purple-100 text-purple-800"
      case "demand":
        return "bg-blue-100 text-blue-800"
      case "supply":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          Market Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
            {getImpactIcon(insight.impact)}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-gray-900">{insight.title}</h4>
                <Badge className={getTypeColor(insight.type)} variant="secondary">
                  {insight.type}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{insight.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
