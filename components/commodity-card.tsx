"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CommodityCardProps {
    name: string
    region: string
    imageUrl: string
    grade1Price: number
    grade1Change: number
    grade1ChangePercent: number
    grade1IsPositive: boolean
    grade2Price: number
    grade2Change: number
    grade2ChangePercent: number
    grade2IsPositive: boolean
    volume: string
    lastUpdate: string
}

const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-')
}

export function CommodityCard({
    name,
    region,
    imageUrl,
    grade1Price,
    grade1Change,
    grade1ChangePercent,
    grade1IsPositive,
    grade2Price,
    grade2Change,
    grade2ChangePercent,
    grade2IsPositive,
    volume,
    lastUpdate,
}: CommodityCardProps) {
    const commoditySlug = generateSlug(name)

    return (
        <Link href={`/commodity/${commoditySlug}`}>
            <div className="w-full border-b border-gray-200 py-3 px-4 hover:bg-gray-50 transition cursor-pointer">
                {/* Desktop Table Row */}
                <div className="hidden md:grid md:grid-cols-7 md:items-center text-sm">
                    {/* Name + Image */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 flex-shrink-0">
                            <Image src={imageUrl} alt={name} fill className="object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-900">{name}</span>
                            <span className="text-xs text-gray-500">{region}</span>
                        </div>
                    </div>

                    {/* Grade 1 Price */}
                    <div className="text-gray-900 font-medium">${grade1Price.toLocaleString()}</div>

                    {/* Grade 1 Change */}
                    <div
                        className={cn(
                            "flex items-center gap-1 font-medium",
                            grade1IsPositive ? "text-emerald-600" : "text-red-600"
                        )}
                    >
                        {grade1IsPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {grade1ChangePercent.toFixed(2)}%
                    </div>

                    {/* Grade 1 Absolute Change */}
                    <div
                        className={cn(
                            "font-medium",
                            grade1IsPositive ? "text-emerald-600" : "text-red-600"
                        )}
                    >
                        {grade1IsPositive ? "+" : ""}
                        {grade1Change.toFixed(2)} USD
                    </div>

                    {/* Grade 2 Price */}
                    <div className="text-gray-900 font-medium">${grade2Price.toLocaleString()}</div>

                    {/* Grade 2 Change */}
                    <div
                        className={cn(
                            "flex items-center gap-1 font-medium",
                            grade2IsPositive ? "text-emerald-600" : "text-red-600"
                        )}
                    >
                        {grade2IsPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {grade2ChangePercent.toFixed(2)}%
                    </div>

                    {/* Volume */}
                    <div className="text-gray-700">{volume}</div>
                </div>

                {/* Mobile Card Layout */}
                <div className="md:hidden space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8">
                            <Image src={imageUrl} alt={name} fill className="rounded-full object-cover" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">{name}</p>
                            <p className="text-xs text-gray-500">{region}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <p className="text-xs text-gray-500">Grade 1 Price</p>
                            <p className="font-medium">${grade1Price.toLocaleString()}</p>
                            <p
                                className={cn(
                                    "flex items-center gap-1 text-xs",
                                    grade1IsPositive ? "text-emerald-600" : "text-red-600"
                                )}
                            >
                                {grade1IsPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                {grade1ChangePercent.toFixed(2)}% ({grade1Change.toFixed(2)} USD)
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">Grade 2 Price</p>
                            <p className="font-medium">${grade2Price.toLocaleString()}</p>
                            <p
                                className={cn(
                                    "flex items-center gap-1 text-xs",
                                    grade2IsPositive ? "text-emerald-600" : "text-red-600"
                                )}
                            >
                                {grade2IsPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                {grade2ChangePercent.toFixed(2)}% ({grade2Change.toFixed(2)} USD)
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Volume: {volume}</span>
                        <span>Updated {lastUpdate}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
