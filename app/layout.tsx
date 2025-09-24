import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",   // important for local bundling
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",   // same here
})

export const metadata: Metadata = {
  title: "TradePulse Nigeria",
  description:
    "Real-time insights into Nigeria's export market intelligence - Track Nigerian commodity prices, analyze export trends, and make informed trading decisions with our comprehensive trade intelligence platform for Nigeria's non-oil exports.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
