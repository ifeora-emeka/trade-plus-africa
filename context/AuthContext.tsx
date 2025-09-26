// context/AuthContext.tsx
"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface AuthContextType {
  isLoggedIn: boolean
  setLoggedIn: (state: boolean) => void
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false)

  // Initialize login state from cookie
  useEffect(() => {
    const cookies = document.cookie
      .split("; ")
      .reduce((acc, cookie) => {
        const [key, value] = cookie.split("=")
        acc[key] = value
        return acc
      }, {} as Record<string, string>)

    setLoggedIn(cookies["auth-ui"] === "true")
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
