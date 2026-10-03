"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Activity, MapPin, AlertTriangle, CheckCircle2, ArrowLeftRight } from "lucide-react"

/* ─── Datos por escenario ─── */
const scenarios = {
  viable: {
    label: "Link Viable",
    labelColor: "text-green-600",
    badgeBg: "bg-green-50 border-green-200",
    pingColor: "bg-green-400",
    dotColor: "bg-green-500",
    icon: CheckCircle2,
    iconColor: "text-green-600",
    graph: "/calc_graph.png",
    graphAlt: "Elevation Profile — Viable Link",
    distance: "21.2 km",
    distanceCard: "from-green-50 to-green-100",
    distanceText: "text-green-900",
    distanceIcon: "text-green-700",
    latency: "241 ms",
    latencyCard: "from-blue-50 to-blue-100",
    latencyText: "text-blue-900",
    latencyIcon: "text-blue-700",
    headerBorder: "border-green-100",
  },
  blocked: {
    label: "Link Obstructed",
    labelColor: "text-red-600",
    badgeBg: "bg-red-50 border-red-200",
    pingColor: "bg-red-400",
    dotColor: "bg-red-500",
    icon: AlertTriangle,
    iconColor: "text-red-600",
    graph: "/calc_graph_no-viable.png",
    graphAlt: "Elevation Profile — Obstructed Link",
    distance: "30.5 km",
    distanceCard: "from-red-50 to-red-100",
    distanceText: "text-red-900",
    distanceIcon: "text-red-700",
    latency: "312 ms",
    latencyCard: "from-orange-50 to-orange-100",
    latencyText: "text-orange-900",
    latencyIcon: "text-orange-700",
    headerBorder: "border-red-100",
  },
}

/* ─── Cara de la tarjeta (reutilizable) ─── */
function CardFace({ scenario }: { scenario: typeof scenarios.viable }) {
  const Icon = scenario.icon
  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className={`mb-4 pb-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${scenario.headerBorder}`}>
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 truncate">
          Line of Sight Analysis
        </h3>
        <div className={`flex items-center gap-2 shrink-0 px-3 py-1 rounded-full border ${scenario.badgeBg} w-fit`}>
          <span className="relative flex h-2.5 w-2.5">
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${scenario.pingColor} opacity-75`} />
            <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${scenario.dotColor}`} />
          </span>
          <Icon className={`w-3.5 h-3.5 ${scenario.iconColor}`} />
          <span className={`text-xs font-semibold ${scenario.labelColor}`}>{scenario.label}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 flex-1">
        {/* Gráfico — ocupa 2/3 en md */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            Elevation Profile &amp; Fresnel Zone
          </p>
          <div className="flex-1 min-h-[130px] sm:min-h-[160px] overflow-hidden rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100">
            <img
              src={scenario.graph}
              alt={scenario.graphAlt}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Métricas — 1/3 en md */}
        <div className="flex flex-row md:flex-col gap-3">
          <p className="hidden md:block text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
            Live Metrics
          </p>

          {/* Distance */}
          <motion.div
            className={`flex-1 rounded-xl bg-gradient-to-br ${scenario.distanceCard} p-3 sm:p-4 flex flex-col justify-center`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`flex items-center gap-1.5 mb-1`}>
              <MapPin className={`w-3.5 h-3.5 ${scenario.distanceIcon}`} />
              <p className={`text-xs font-medium ${scenario.distanceText} opacity-70`}>Link Distance</p>
            </div>
            <p className={`text-xl sm:text-2xl font-bold ${scenario.distanceText}`}>{scenario.distance}</p>
          </motion.div>

          {/* Latency */}
          <motion.div
            className={`flex-1 rounded-xl bg-gradient-to-br ${scenario.latencyCard} p-3 sm:p-4 flex flex-col justify-center`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <Activity className={`w-3.5 h-3.5 ${scenario.latencyIcon}`} />
              <p className={`text-xs font-medium ${scenario.latencyText} opacity-70`}>Calc. Time</p>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={scenario.latency}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`text-xl sm:text-2xl font-bold ${scenario.latencyText}`}
              >
                {scenario.latency}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ─── Componente principal ─── */
export function RealtimePropertyCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped((prev) => !prev)
  }

  const nextLabel = isFlipped ? "Viable" : "Obstructed"

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col gap-3"
    >
      {/* Toggle button with subtle live beacon indicator */}
      <div className="flex justify-end">
        <motion.button
          onClick={handleFlip}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold bg-white border border-slate-200/90 text-slate-700 shadow-xs hover:border-blue-300 hover:shadow-md hover:text-slate-900 transition-all duration-300 cursor-pointer select-none"
        >
          {/* Subtle pulsing live indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>

          <span className="text-slate-500 font-medium hidden min-[360px]:inline">Interactive:</span>
          <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            Flip to {nextLabel} Link
          </span>

          <ArrowLeftRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:rotate-180 transition-all duration-500 ml-0.5" />
        </motion.button>
      </div>

      {/* 3D flip container */}
      <div style={{ perspective: "1200px" }}>
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformStyle: "preserve-3d", position: "relative" }}
          className="w-full"
        >
          {/* FRONT (Link Viable) */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              pointerEvents: isFlipped ? "none" : "auto",
            }}
            className="w-full rounded-2xl shadow-[rgba(14,63,126,0.04)_0px_0px_0px_1px,rgba(42,51,69,0.04)_0px_1px_1px_-0.5px,rgba(42,51,70,0.04)_0px_3px_3px_-1.5px,rgba(42,51,70,0.04)_0px_6px_6px_-3px,rgba(14,63,126,0.04)_0px_12px_12px_-6px,rgba(14,63,126,0.04)_0px_24px_24px_-12px]"
          >
            <CardFace scenario={scenarios.viable} />
          </div>

          {/* BACK (Link Obstructed — rotated 180° in Y so it faces backwards initially and turns forward on flip) */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              inset: 0,
              pointerEvents: isFlipped ? "auto" : "none",
            }}
            className="w-full rounded-2xl shadow-[rgba(14,63,126,0.04)_0px_0px_0px_1px,rgba(42,51,69,0.04)_0px_1px_1px_-0.5px,rgba(42,51,70,0.04)_0px_3px_3px_-1.5px,rgba(42,51,70,0.04)_0px_6px_6px_-3px,rgba(14,63,126,0.04)_0px_12px_12px_-6px,rgba(14,63,126,0.04)_0px_24px_24px_-12px]"
          >
            <CardFace scenario={scenarios.blocked} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
