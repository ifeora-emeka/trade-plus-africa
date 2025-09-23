import { Header } from "@/components/header"
import { ClientSearchWrapper } from "@/components/client-search-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="mb-4 container mx-auto px-4 pt-6">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      <ClientSearchWrapper />
    </div>
  )
}
