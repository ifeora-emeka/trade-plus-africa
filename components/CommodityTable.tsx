"use client";

import { CommodityCard } from "./commodity-card";

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
        imageUrl: "https://images.unsplash.com/photo-1545567724-9b16e57c906d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        imageUrl: "https://images.unsplash.com/photo-1594999791332-48843eebd9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VzYW1lJTIwc2VlZHN8ZW58MHx8MHx8fDA%3D",
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
        imageUrl: "https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzaGV3JTIwbnV0c3xlbnwwfHwwfHx8MA%3D%3D",
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
        imageUrl: "https://images.unsplash.com/photo-1596752837587-c75150cf66f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwcGFsbSUyMHNlZWR8ZW58MHx8MHx8fDA%3D",
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
        imageUrl: "https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2luZ2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
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
        imageUrl: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D",
        grade1IsPositive: true,
        grade2IsPositive: true
    }
]

export default function CommodityTable() {
    return (
        <div className="w-full">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto mx-auto border rounded-lg">
                <div className="grid grid-cols-7 text-center bg-gray-100 text-sm font-semibold text-gray-700 px-4 py-3">
                    <div>Name</div>
                    <div>Grade 1 Price</div>
                    <div>Grade 1 Change %</div>
                    <div>Grade 1 Change</div>
                    <div>Grade 2 Price</div>
                    <div>Grade 2 Change %</div>
                    <div>Volume</div>
                </div>
                <div className="divide-y">
                    {popularCommodities.map((commodity) => (
                        <CommodityCard key={commodity.name} {...commodity} />
                    ))}
                </div>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 md:hidden">
                {popularCommodities.map((commodity, idx) => (
                    <div
                        key={idx}
                        className="bg-white border rounded-xl shadow-sm p-4 space-y-3"
                    >
                        {/* Top: Image + Name + Region */}
                        <div className="flex items-center gap-3">
                            <img
                                src={commodity.imageUrl}
                                alt={commodity.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold">{commodity.name}</p>
                                <p className="text-xs text-gray-500">{commodity.region}</p>
                            </div>
                            <span className="ml-auto text-xs text-gray-400">
                {commodity.lastUpdate}
              </span>
                        </div>

                        {/* Prices */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-gray-500">Grade 1</p>
                                <p className="font-medium">₦{commodity.grade1Price}</p>
                                <p
                                    className={`${
                                        commodity.grade1IsPositive
                                            ? "text-emerald-600"
                                            : "text-red-600"
                                    } text-xs`}
                                >
                                    {commodity.grade1Change} USD (
                                    {commodity.grade1ChangePercent}%)
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-500">Grade 2</p>
                                <p className="font-medium">₦{commodity.grade2Price}</p>
                                <p
                                    className={`${
                                        commodity.grade2IsPositive
                                            ? "text-emerald-600"
                                            : "text-red-600"
                                    } text-xs`}
                                >
                                    {commodity.grade2Change} USD (
                                    {commodity.grade2ChangePercent}%)
                                </p>
                            </div>
                        </div>

                        {/* Volume */}
                        <div className="text-xs text-gray-500">
                            Volume: {commodity.volume}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
