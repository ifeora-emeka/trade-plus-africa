"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function LogoutButton({ onLogout }: { onLogout?: () => void }) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/public/admin/logout", { method: "POST" })
    if (onLogout) onLogout()
    router.push("/") // redirect back to login form
  }

  return <Button variant="destructive" onClick={handleLogout}>Logout</Button>
}
