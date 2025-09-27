// app/api/public/admin/logout/route.ts
import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" })

  // Clear both cookies
  response.cookies.set("auth-token", "", { path: "/", maxAge: 0, httpOnly: true })
  response.cookies.set("auth-ui", "", { path: "/", maxAge: 0 })

  return response
}
