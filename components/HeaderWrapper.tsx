// components/HeaderWrapper.tsx
"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"


export function HeaderWrapper() {
  const pathname = usePathname()

  // Do not show header on login page
  if (pathname === "/login") return null

  return <Header />
}
