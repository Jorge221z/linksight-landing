import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Check, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing - Basic & Pro Plans",
  description: "Simple, transparent pricing for LinkSight. Choose between our Free Basic plan and Pro plan for unlimited RF link calculations, PDF reports, and priority support.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "LinkSight Pricing - Basic & Pro Plans",
    description: "Simple, transparent pricing for LinkSight. Choose between our Free Basic plan and Pro plan for unlimited RF link calculations, PDF reports, and priority support.",
    url: "https://linksightapp.com/pricing",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkSight Pricing - Basic & Pro Plans",
    description: "Simple, transparent pricing for LinkSight. Free Basic and Pro plans for field engineers.",
    images: ["/og-image.jpg"],
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="pt-44 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-left mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors group cursor-pointer">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 font-serif text-slate-900">
              Simple, transparent pricing
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Built for field engineers. Start for free, upgrade when you need more power.
            </p>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Card 1: LinkSight Basic */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium text-slate-500 mb-2">LinkSight Basic</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-light text-slate-900">€0</span>
                    <span className="text-muted-foreground text-sm">/ month</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-8 border-b border-zinc-100 pb-6">
                    Perfect for hobbyists, drone pilots, and casual point-to-point link planning.
                  </p>
                  
                  <ul className="space-y-4 mb-10 text-slate-700">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">5 daily LOS calculations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Topographic profile &amp; Fresnel zone analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Custom RF spectrum &amp; presets (100 MHz – 60 GHz)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Global topographic coverage (SRTM90m)</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.linksight.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-zinc-200 hover:border-zinc-800 rounded-full py-4 text-sm font-semibold transition-all duration-300 bg-transparent text-zinc-800 hover:bg-zinc-800 hover:text-white mt-auto"
                >
                  <span>Download Free</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Card 2: LinkSight PRO */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-blue-600 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between relative">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-xs">
                  Most Popular
                </span>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">LinkSight PRO</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-light text-slate-900">€3.59</span>
                    <span className="text-muted-foreground text-sm">/ month</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-8 border-b border-zinc-100 pb-6">
                    Designed for telecom operators and engineering teams needing unlimited precision.
                  </p>
                  
                  <ul className="space-y-4 mb-10 text-slate-700">
                    <li className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">All included in Basic, plus:</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Unlimited LOS calculations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Client-ready PDF feasibility reports with company branding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Priority engineering support</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.linksight.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full py-4 text-sm font-semibold transition-all duration-300 shadow-md shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.03] mt-auto"
                >
                  <span>Upgrade In-App</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>


      </div>

      <Footer minimal={true} />
    </main>
  )
}
