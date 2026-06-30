import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://linksight.app"),
  title: {
    default: "LinkSight - RF Link Planning in Your Pocket",
    template: "%s | LinkSight",
  },
  description: "Plan point-to-point microwave links and calculate Fresnel zones instantly from your phone. Built for field engineers.",
  generator: "v0.app",
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
  ],
  authors: [{ name: "LinkSight" }],
  creator: "LinkSight",
  publisher: "LinkSight",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LinkSight - RF Link Planning in Your Pocket",
    description: "Plan point-to-point microwave links and calculate Fresnel zones instantly from your phone. Built for field engineers.",
    url: "https://linksight.app",
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
