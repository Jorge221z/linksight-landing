import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Check, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for LinkSight. Choose between our Basic and Pro plans, and start planning point-to-point microwave links today.",
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
                      <span className="text-sm">Topographic profile visualization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Standard resolution data</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full flex items-center justify-center gap-2 border border-zinc-200 hover:border-zinc-800 rounded-full py-4 text-sm font-semibold transition-all duration-300 bg-transparent text-zinc-800 hover:bg-zinc-800 hover:text-white cursor-pointer mt-auto">
                  <span>Download Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card 2: LinkSight PRO */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-blue-600 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between relative">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-xs">
                  Most Popular
                </span>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">LinkSight PRO</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-light text-slate-900">€3.69</span>
                    <span className="text-muted-foreground text-sm">/ month</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-8 border-b border-zinc-100 pb-6">
                    Designed for telecom operators and engineering teams needing unlimited precision.
                  </p>
                  
                  <ul className="space-y-4 mb-10 text-slate-700">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm font-medium">Unlimited LOS calculations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Global topographic coverage (SRTM90m)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Export professional PDF reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm">Priority support</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full py-4 text-sm font-semibold transition-all duration-300 shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 cursor-pointer mt-auto">
                  <span>Upgrade In-App</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </section>


      </div>

      <Footer minimal={true} />
    </main>
  )
}
