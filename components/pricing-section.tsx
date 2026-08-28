"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const RouterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6"/><path d="M10.01 18H10"/><path d="M15 10v4"/><path d="M17.84 7.17a4 4 0 0 0-5.66 0"/><path d="M20.66 4.34a8 8 0 0 0-11.31 0"/></svg>
)

const RadioIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
)

const DroneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" {...props}>
    <path d="M13.92,14.88l2.87-1V11a1.92,1.92,0,0,0-1.91-1.92H9.12A1.92,1.92,0,0,0,7.21,11v2.88l2.87,1"/>
    <circle cx="12" cy="14.88" r="1.92"/>
    <line x1="7.21" y1="11.04" x2="0.5" y2="11.04"/>
    <line x1="23.5" y1="11.04" x2="16.79" y2="11.04"/>
    <line x1="0.5" y1="6.25" x2="6.25" y2="6.25"/>
    <line x1="17.75" y1="6.25" x2="23.5" y2="6.25"/>
    <line x1="3.38" y1="6.25" x2="3.38" y2="11.04"/>
    <line x1="20.63" y1="6.25" x2="20.63" y2="11.04"/>
    <polyline points="3.38 17.75 5.29 17.75 5.29 14.88 7.21 13.92"/>
    <polyline points="20.63 17.75 18.71 17.75 18.71 14.88 16.79 13.92"/>
  </svg>
)

const SatelliteDishIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 10a7.31 7.31 0 0 0 10 10Z"/><path d="m9 15 3-3"/><path d="M17 13a6 6 0 0 0-6-6"/><path d="M21 13A10 10 0 0 0 11 3"/></svg>
)

const SatelliteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"/><path d="M16.5 7.5 19 5"/><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"/><path d="M9 21a6 6 0 0 0-6-6"/><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/></svg>
)

function PresetFrequencyBadge({ frequencies }: { frequencies: string[] }) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % frequencies.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [frequencies])

  return (
    <span className="inline-flex items-center px-2.5 py-1 bg-zinc-100/90 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-200 shadow-xs h-6 min-w-[72px] justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={frequencies[index]}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="whitespace-nowrap"
        >
          {frequencies[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function CustomSweepFrequencyBadge() {
  const [display, setDisplay] = React.useState("100.0 MHz")

  React.useEffect(() => {
    let startTime: number | null = null
    let frameId: number
    const duration = 16000

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) % duration
      const progress = elapsed / duration

      // Smooth exponential progression from 100 MHz to 60,000 MHz (60 GHz)
      const mhz = 100 * Math.pow(60000 / 100, progress)

      if (mhz < 1000) {
        setDisplay(`${mhz.toFixed(1)} MHz`)
      } else {
        setDisplay(`${(mhz / 1000).toFixed(2)} GHz`)
      }

      frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50/90 text-blue-700 text-xs font-semibold rounded-full border border-blue-200/80 shadow-xs h-6 justify-center">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
      <span className="text-blue-600/90">Custom:</span>
      <span className="font-mono font-bold whitespace-nowrap">{display}</span>
    </span>
  )
}

const useCases = [
  {
    title: "WISP Operators",
    icon: RouterIcon,
    description: "Plan broadband point-to-point microwave links. Calculate tower heights and verify line of sight before sending installation crews to the field.",
    type: "presets" as const,
    frequencies: ["5.8 GHz", "6.0 GHz"],
  },
  {
    title: "Meshtastic & LoRa",
    icon: RadioIcon,
    description: "Design off-grid mesh networks and deploy low-power nodes. Guarantee your signal cuts through the terrain for maximum range.",
    type: "presets" as const,
    frequencies: ["868 MHz", "915 MHz"],
  },
  {
    title: "UAV & Drone Pilots",
    icon: DroneIcon,
    description: "Ensure telemetry and video link stability for BVLOS (Beyond Visual Line of Sight) flights by checking terrain obstruction beforehand.",
    type: "presets" as const,
    frequencies: ["2.4 GHz", "5.8 GHz"],
  },
  {
    title: "RF Engineers",
    icon: SatelliteIcon,
    description: "Ultimate flexibility. Input any custom frequency and mast height to analyze specific Fresnel zones for amateur radio or proprietary networks.",
    type: "sweep" as const,
  },
]

export function PricingSection() {
  return (
    <section id="use-cases" className="py-32 overflow-hidden bg-zinc-50/50 text-foreground">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Built for every RF need</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
          Whether you are deploying enterprise wireless or hobbyist mesh networks, LinkSight provides the precision you need.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-300 group flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {useCase.type === "presets" ? (
                    <PresetFrequencyBadge frequencies={useCase.frequencies} />
                  ) : (
                    <CustomSweepFrequencyBadge />
                  )}
                </div>
                
                <h3 className="text-2xl font-medium mb-4 text-slate-900">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {useCase.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
