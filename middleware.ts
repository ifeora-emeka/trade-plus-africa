import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value
  const { pathname } = request.nextUrl

  // If NOT logged in and not on /login → redirect to login
if (!token && pathname !== "/login" && !pathname.startsWith("/api/public/admin/auth")) {
  const loginUrl = new URL("/login", request.url)
  return NextResponse.redirect(loginUrl)
}

  // If logged in and trying to access /login → redirect to home
  if (token && pathname === "/login") {
    const homeUrl = new URL("/", request.url)
    return NextResponse.redirect(homeUrl)
  }

  // Otherwise continue
  return NextResponse.next()
}

// ✅ Match all routes
export const config = {
  matcher: ["/((?!login|api|_next/static|_next/image|favicon.ico).*)"],

}