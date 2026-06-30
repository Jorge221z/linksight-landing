import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for LinkSight. Learn how we handle and protect your RF link planning and zone calculation data.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Header />

        <div className="max-w-3xl mx-auto px-6 pt-44 pb-24">
          <div className="text-left mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors group cursor-pointer">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-normal font-serif text-slate-900 mb-8">
            Privacy Policy
          </h1>
          <div className="bg-zinc-50 border border-zinc-200/60 rounded-2xl p-8 text-center italic text-muted-foreground text-sm">
            Legal text will be injected here
          </div>
        </div>
      </div>

      <Footer minimal={true} />
    </main>
  )
}
