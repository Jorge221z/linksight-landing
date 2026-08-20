import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://linksightapp.com"),
  title: {
    default: "LinkSight - RF Link Planning in Your Pocket",
    template: "%s | LinkSight",
  },
  description: "Plan point-to-point microwave links and calculate Fresnel zones instantly from your phone. Built for field engineers.",
  keywords: [
    "RF planning",
    "microwave links",
    "Fresnel zone",
    "telecom engineering",
    "line of sight",
    "LOS calculations",
    "RF propagation",
    "point to point link",
    "telecom calculator",
    "microwave link budget",
    "Mobile RF planning",
    "Mobile RF calculations",
    "Mobile RF calculator",
    "Mobile line of sight",
    "Mobile Fresnel zone",
    "Pocket RF planner",
    "Smartphone RF planning",
    "Mobile microwave link planning",
    "Field engineer mobile tool",
    "Android RF planning app",
    "Android RF calculator",
    "Mobile telecommunications calculator",
    "Mobile elevation profile calculator",
    "WISP tower planning",
    "Meshtastic terrain calculator",
    "LoRa link planning",
    "Drone BVLOS terrain clearance",
    "SRTM90m elevation profile"
  ],
  authors: [
    { name: "Jorge Muñoz Castillo", url: "https://jorgemunoz.pro" },
    { name: "LinkSight", url: "https://linksightapp.com" }
  ],
  creator: "Jorge Muñoz Castillo",
  publisher: "Jorge Muñoz Castillo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LinkSight - RF Link Planning in Your Pocket",
    description: "Plan point-to-point microwave links and calculate Fresnel zones instantly from your phone. Built for field engineers.",
    url: "https://linksightapp.com",
    siteName: "LinkSight",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LinkSight - RF Link Planning on Mobile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkSight - RF Link Planning in Your Pocket",
    description: "Plan point-to-point microwave links and calculate Fresnel zones instantly from your phone. Built for field engineers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <StructuredData />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
