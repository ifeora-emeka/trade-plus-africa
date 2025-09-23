"use client"

import {Badge} from "@/components/ui/badge"
import {Card, CardContent} from "@/components/ui/card"
import {TrendingUp, TrendingDown, Clock, Globe} from "lucide-react"
import Image from "next/image"
import {cn} from "@/lib/utils"

interface CommodityHeaderProps {
    name: string
    imageUrl: string
    region: string
    grade1Price: number
    grade2Price: number
    grade1Change: number
    grade2Change: number
    grade1ChangePercent: number
    grade2ChangePercent: number
    grade1IsPositive: boolean
    grade2IsPositive: boolean
    lastUpdate: string
    volume: string
    tradingRegions: string[]
}

export function CommodityHeader({
                                    name,
                                    imageUrl,
                                    region,
                                    grade1Price,
                                    grade2Price,
                                    grade1Change,
                                    grade2Change,
                                    grade1ChangePercent,
                                    grade2ChangePercent,
                                    grade1IsPositive,
                                    grade2IsPositive,
                                    lastUpdate,
                                    volume,
                                    tradingRegions
                                }: CommodityHeaderProps) {
    return (
        <div className="space-y-6">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image src={imageUrl} alt={name} fill className="object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"/>
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black/60"/>
                <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                        <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">{name}</h1>
                        <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                                {region}
                            </Badge>
                            <span className="text-sm text-white/90 drop-shadow">Volume: {volume}</span>
                            <div className="flex items-center gap-2 text-sm text-white/90 drop-shadow">
                                <Clock className="w-4 h-4"/>
                                <span>Last updated: {lastUpdate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className={'py-0'}>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Grade 1</h3>
                            <div
                                className={cn(
                                    "flex items-center gap-1 text-sm font-medium",
                                    grade1IsPositive ? "text-green-600" : "text-red-600"
                                )}
                            >
                                {grade1IsPositive ? <TrendingUp className="w-4 h-4"/> :
                                    <TrendingDown className="w-4 h-4"/>}
                                {grade1ChangePercent > 0 ? "+" : ""}{grade1ChangePercent}%
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            ${grade1Price.toLocaleString()}
                            <span className="text-sm font-normal text-gray-500">/ton</span>
                        </div>
                        <div className={cn(
                            "text-sm",
                            grade1IsPositive ? "text-green-600" : "text-red-600"
                        )}>
                            {grade1Change > 0 ? "+" : ""}${grade1Change} today
                        </div>
                    </CardContent>
                </Card>

                <Card className={'py-0'}>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Grade 2</h3>
                            <div className={cn(
                                "flex items-center gap-1 text-sm font-medium",
                                grade2IsPositive ? "text-green-600" : "text-red-600"
                            )}>
                                {grade2IsPositive ? <TrendingUp className="w-4 h-4"/> :
                                    <TrendingDown className="w-4 h-4"/>}
                                {grade2ChangePercent > 0 ? "+" : ""}{grade2ChangePercent}%
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            ${grade2Price.toLocaleString()}
                            <span className="text-sm font-normal text-gray-500">/ton</span>
                        </div>
                        <div className={cn(
                            "text-sm",
                            grade2IsPositive ? "text-green-600" : "text-red-600"
                        )}>
                            {grade2Change > 0 ? "+" : ""}${grade2Change} today
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4"/>
                    <span>Trading regions: {tradingRegions.join(", ")}</span>
                </div>
            </div>
        </div>
    )
}
