"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, XAxis, YAxis } from "recharts"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const chartData = [
	{ month: "January", grade1: 1200, grade2: 950 },
	{ month: "February", grade1: 1450, grade2: 1180 },
	{ month: "March", grade1: 1850, grade2: 1520 },
	{ month: "April", grade1: 2100, grade2: 1780 },
	{ month: "May", grade1: 2650, grade2: 2200 },
	{ month: "June", grade1: 2980, grade2: 2450 },
	{ month: "July", grade1: 3200, grade2: 2680 },
	{ month: "August", grade1: 3483, grade2: 2850 },
]

const forecastData = [
	{ month: "September", grade1: 3520, grade2: 2880 },
	{ month: "October", grade1: 3650, grade2: 2950 },
	{ month: "November", grade1: 3780, grade2: 3050 },
	{ month: "December", grade1: 3900, grade2: 3150 },
]

const chartConfig = {
	grade1: {
		label: "Grade 1",
		color: "hsl(var(--chart-1))",
	},
	grade2: {
		label: "Grade 2",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig

export function PriceTrendChart() {
	const [timeRange, setTimeRange] = useState("6m")
	const [showForecast, setShowForecast] = useState(false)

	const allData = showForecast ? [...chartData, ...forecastData] : chartData

	return (
		<Card className={'md:max-h-[300px'}>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>
						<CardTitle>Price Trends</CardTitle>
						<CardDescription>
							Historical and forecasted price movements
						</CardDescription>
					</div>
					<div className="flex gap-2">
						<Button
							variant={timeRange === "30d" ? "default" : "outline"}
							size="sm"
							onClick={() => setTimeRange("30d")}
						>
							30D
						</Button>
						<Button
							variant={timeRange === "6m" ? "default" : "outline"}
							size="sm"
							onClick={() => setTimeRange("6m")}
						>
							6M
						</Button>
						<Button
							variant={timeRange === "1y" ? "default" : "outline"}
							size="sm"
							onClick={() => setTimeRange("1y")}
						>
							1Y
						</Button>
					</div>
				</div>
				<div className="flex gap-2 mt-2">
					<Button
						variant={!showForecast ? "default" : "outline"}
						size="sm"
						onClick={() => setShowForecast(false)}
					>
						Historical
					</Button>
					<Button
						variant={showForecast ? "default" : "outline"}
						size="sm"
						onClick={() => setShowForecast(true)}
					>
						With Forecast
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className={'md:h-[300px] w-full'}>
					<AreaChart
						accessibilityLayer
						data={allData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => `$${value}`}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<defs>
							<linearGradient id="fillGrade1" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-grade1)"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-grade1)"
									stopOpacity={0.1}
								/>
							</linearGradient>
							<linearGradient id="fillGrade2" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-grade2)"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-grade2)"
									stopOpacity={0.1}
								/>
							</linearGradient>
						</defs>
						<Area
							dataKey="grade2"
							type="natural"
							fill="url(#fillGrade2)"
							fillOpacity={0.4}
							stroke="var(--color-grade2)"
							stackId="a"
						/>
						<Area
							dataKey="grade1"
							type="natural"
							fill="url(#fillGrade1)"
							fillOpacity={0.4}
							stroke="var(--color-grade1)"
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
