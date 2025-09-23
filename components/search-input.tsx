"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SearchInputProps {
  placeholder?: string
  className?: string
  onSearch?: (query: string) => void
}

export function SearchInput({ 
  placeholder = "Search for commodities like cocoa, sesame seeds, cashew nuts...",
  className = "",
  onSearch
}: SearchInputProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim() && onSearch) {
      onSearch(query.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`relative max-w-2xl mx-auto ${className}`}>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-chart-1/10 rounded-full blur-xl group-hover:blur-lg transition-all duration-300" />
        
        <div className="relative flex items-center bg-background border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <div className="flex items-center pl-6">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-1 border-0 bg-transparent px-4 py-6 text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          
          <Button
            type="submit"
            size="sm"
            className="mr-2 rounded-full px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            disabled={!query.trim()}
          >
            Search
          </Button>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Popular searches:</span>
        {["Cocoa", "Sesame Seeds", "Cashew Nuts", "Palm Oil", "Ginger"].map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => {
              setQuery(term)
              if (onSearch) onSearch(term)
            }}
            className="text-primary hover:text-primary/80 hover:underline transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </form>
  )
}