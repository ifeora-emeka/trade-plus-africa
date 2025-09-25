"use client"

import { SearchResults } from "@/components/search-results"
import { Suspense } from "react"

function SearchFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Loading...</h1>
            <p className="text-muted-foreground mt-1">Searching commodities...</p>
          </div>
        </div>
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
          <div className="p-8 text-center text-muted-foreground">
            Loading commodities...
          </div>
        </div>
      </div>
    </div>
  )
}

export function ClientSearchWrapper() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchResults />
    </Suspense>
  )
}
