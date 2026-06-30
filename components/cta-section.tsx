import { ArrowUpRight, ArrowRight } from "lucide-react"
import { AnimatedRevenueChart } from "./animated-revenue-chart"

export function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none select-none">
        <span className="font-bold text-center text-[14vw] md:text-[12vw] leading-none tracking-tighter text-zinc-200/80 whitespace-nowrap">
          CALCULATE
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight max-w-4xl mx-auto mb-6 font-serif">
            Ready to plan your wireless links?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the closed beta and start calculating line of sight with unprecedented precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative flex items-center justify-center gap-0 bg-blue-600 text-white rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden">
              <span className="text-sm pr-4">Join Closed Beta</span>
              <span className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </button>

            <button className="relative flex items-center justify-center gap-0 border border-border rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden">
              <span className="absolute inset-0 bg-foreground rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300" />
              <span className="text-sm text-foreground group-hover:text-background pr-4 relative z-10 transition-colors duration-300">
                Learn more
              </span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center relative z-10">
                <ArrowRight className="w-4 h-4 text-foreground group-hover:opacity-0 absolute transition-opacity duration-300" />
                <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-background opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-16">
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="text-center">
            <p className="text-7xl font-light text-foreground">100+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Beta Users</p>
          </div>
          <div className="text-center">
            <p className="text-7xl font-light text-foreground">148M+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Km² Mapped</p>
          </div>
          <div className="text-center">
            <p className="text-7xl font-light text-foreground">&lt; 1s</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Latency</p>
          </div>
        </div>
      </div>
    </section>
  )
}
