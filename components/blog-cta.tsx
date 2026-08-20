import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Smartphone, CheckCircle2 } from "lucide-react"

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.linksight.app"

interface BlogCTAProps {
  title?: string
  description?: string
}

export function BlogCTA({
  title = "Plan RF Links Directly from Your Pocket",
  description = "Calculate terrain elevation profiles and Fresnel zone clearances in seconds with LinkSight. Native on Android, built for field engineers and off-grid network builders."
}: BlogCTAProps) {
  return (
    <div className="my-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white shadow-xl relative overflow-hidden border border-slate-700/50 not-prose">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Native Android App</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 font-serif">
            {title}
          </h3>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>5 Free daily calculations for life</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>SRTM90m global topography</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>868/915 MHz & 2.4/5.8 GHz support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant PDF feasibility reports</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 text-sm"
          >
            <span>Get on Google Play</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white px-5 py-3 rounded-2xl transition-colors text-xs font-medium border border-white/10"
          >
            <span>View Pricing & Plans</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
