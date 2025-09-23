"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, XCircle } from "lucide-react"

interface ValidationMetricsProps {
  accuracy: number
  confidenceInterval: number
  lastValidation: string
  forecastReliability: "high" | "medium" | "low"
}

export function ValidationMetrics({
  accuracy,
  confidenceInterval,
  lastValidation,
  forecastReliability
}: ValidationMetricsProps) {
  const getReliabilityIcon = (reliability: string) => {
    switch (reliability) {
      case "high":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "medium":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />
      case "low":
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />
    }
  }

  const getReliabilityColor = (reliability: string) => {
    switch (reliability) {
      case "high":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Forecast Validation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Prediction Accuracy</span>
            <span className="text-sm font-bold text-gray-900">{accuracy}%</span>
          </div>
          <Progress value={accuracy} className="h-2" />
          <p className="text-xs text-gray-500 mt-1">
            Based on last 30 days of predictions vs actual prices
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Confidence Interval</span>
            <span className="text-sm font-bold text-gray-900">±{confidenceInterval}%</span>
          </div>
          <Progress value={100 - confidenceInterval} className="h-2" />
          <p className="text-xs text-gray-500 mt-1">
            Lower interval indicates higher precision
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-gray-600">Forecast Reliability</span>
            <p className="text-xs text-gray-500">Overall model performance</p>
          </div>
          <div className="flex items-center gap-2">
            {getReliabilityIcon(forecastReliability)}
            <Badge className={getReliabilityColor(forecastReliability)} variant="secondary">
              {forecastReliability}
            </Badge>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-gray-500">
            Last validation: {lastValidation}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
