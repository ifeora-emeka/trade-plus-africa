"use client"

import { CommodityCard } from "@/components/commodity-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const popularCommodities = [
	{
		name: "Cocoa Beans",
		grade1Price: 2850,
		grade2Price: 2650,
		grade1Change: 125.5,
		grade2Change: 98.25,
		grade1ChangePercent: 4.6,
		grade2ChangePercent: 3.8,
		lastUpdate: "2 mins ago",
		volume: "12.5K tons",
		region: "Cross River State",
		imageUrl:
			"https://images.unsplash.com/photo-1545567724-9b16e57c906d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		grade1IsPositive: true,
		grade2IsPositive: true,
	},
	{
		name: "Sesame Seeds",
		grade1Price: 1650,
		grade2Price: 1450,
		grade1Change: -45.25,
		grade2Change: -28.5,
		grade1ChangePercent: -2.8,
		grade2ChangePercent: -2.0,
		lastUpdate: "5 mins ago",
		volume: "8.2K tons",
		region: "Benue State",
		imageUrl:
			"https://images.unsplash.com/photo-1594999791332-48843eebd9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VzYW1lJTIwc2VlZHN8ZW58MHx8MHx8fDA%3D",
		grade1IsPositive: false,
		grade2IsPositive: false,
	},
	{
		name: "Cashew Nuts",
		grade1Price: 4200,
		grade2Price: 3800,
		grade1Change: 180.75,
		grade2Change: -45.3,
		grade1ChangePercent: 4.5,
		grade2ChangePercent: -1.2,
		lastUpdate: "1 min ago",
		volume: "6.8K tons",
		region: "Kwara State",
		imageUrl:
			"https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzaGV3JTIwbnV0c3xlbnwwfHwwfHx8MA%3D%3D",
		grade1IsPositive: true,
		grade2IsPositive: false,
	},
	{
		name: "Palm Oil",
		grade1Price: 980,
		grade2Price: 850,
		grade1Change: 15.3,
		grade2Change: 22.1,
		grade1ChangePercent: 1.6,
		grade2ChangePercent: 2.7,
		lastUpdate: "8 mins ago",
		volume: "25.1K tons",
		region: "Rivers State",
		imageUrl:
			"https://images.unsplash.com/photo-1596752837587-c75150cf66f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcGFsbSUyMHNlZWR8ZW58MHx8MHx8fDA%3D",
		grade1IsPositive: true,
		grade2IsPositive: true,
	},
	{
		name: "Ginger",
		grade1Price: 3200,
		grade2Price: 2900,
		grade1Change: -65.8,
		grade2Change: 35.2,
		grade1ChangePercent: -2.1,
		grade2ChangePercent: 1.2,
		lastUpdate: "3 mins ago",
		volume: "4.5K tons",
		region: "Kaduna State",
		imageUrl:
			"https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2luZ2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
		grade1IsPositive: false,
		grade2IsPositive: true,
	},
	{
		name: "Coffee Beans",
		grade1Price: 5800,
		grade2Price: 5200,
		grade1Change: 240.6,
		grade2Change: 198.4,
		grade1ChangePercent: 4.3,
		grade2ChangePercent: 3.9,
		lastUpdate: "4 mins ago",
		volume: "18.7K tons",
		region: "Taraba State",
		imageUrl:
			"https://images.unsplash.com/photo-1675306408031-a9aad9f23308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D",
		grade1IsPositive: true,
		grade2IsPositive: true,
	},
]

export function PopularItems() {
	return (
		<section className="py-12 bg-gradient-to-b from-background to-muted/20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="space-y-4">
					{/* Header */}
					<div className="text-left space-y-4 flex align-text-bottom justify-between">
						
							<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
							Most Popular{" "}
							<span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
								Commodities
							</span>
						</h2>
						
						
						<span className=" ">
							<Link href="#" className="flex justify-items-center align-middle gap-3">View More <ArrowRight  className="w-5"/></Link>
						</span>
						
						
					</div>

					{/*  Table style*/}
					<div className="w-full border border-border/50 rounded-lg overflow-hidden">
						{/* Table Header - Desktop */}
						<div className="hidden md:grid md:grid-cols-7 bg-muted/40 text-muted-foreground text-sm font-medium py-3 px-4 border-b border-border/50 sticky top-0">
							<div>Commodity</div>
							<div>Grade 1 Price</div>
							<div>Grade 1 %</div>
							<div>Grade 1 Change</div>
							<div>Grade 2 Price</div>
							<div>Grade 2 %</div>
							<div>Volume</div>
						</div>

						{/* Table Body */}
						<div className="divide-y divide-border/50">
							{popularCommodities.map((commodity) => (
								<CommodityCard key={commodity.name} {...commodity} />
							))}
						</div>
					</div>

					
					
				</div>
			</div>
		</section>
	)
}