"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Activity, MapPin } from "lucide-react"

const elevationData = [
  { distance: 0, elevation: 120, los: 120, fresnelUpper: 120, fresnelLower: 120 },
  { distance: 1, elevation: 135, los: 130, fresnelUpper: 138, fresnelLower: 122 },
  { distance: 2, elevation: 140, los: 140, fresnelUpper: 152, fresnelLower: 128 },
  { distance: 3, elevation: 160, los: 150, fresnelUpper: 165, fresnelLower: 135 },
  { distance: 4, elevation: 150, los: 160, fresnelUpper: 177, fresnelLower: 143 },
  { distance: 5, elevation: 130, los: 170, fresnelUpper: 188, fresnelLower: 152 },
  { distance: 6, elevation: 110, los: 180, fresnelUpper: 197, fresnelLower: 163 },
  { distance: 7, elevation: 150, los: 190, fresnelUpper: 205, fresnelLower: 175 },
  { distance: 8, elevation: 185, los: 200, fresnelUpper: 212, fresnelLower: 188 },
  { distance: 9, elevation: 190, los: 210, fresnelUpper: 217, fresnelLower: 203 },
  { distance: 10, elevation: 220, los: 220, fresnelUpper: 220, fresnelLower: 220 },
]

export function RealtimePropertyCard() {
  const [latency] = useState(241)
  const [distance] = useState(21.2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full rounded-2xl bg-white p-6"
      style={{
        boxShadow:
          "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
      }}
    >
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
        <h3 className="text-lg font-semibold text-slate-900 truncate">Line of Sight Analysis</h3>
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>
          <span className="text-sm text-slate-500 font-medium">Link Viable</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
        <div className="md:col-span-2 flex flex-col">
          <p className="mb-3 text-sm font-medium text-slate-700">Elevation Profile & Fresnel Zone</p>
          <div className="h-48 overflow-hidden rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100">
            <img src="/calc_graph.png" alt="Elevation Profile Graph" className="w-full h-full object-contain rounded-xl" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="mb-0 md:mb-[-4px] text-sm font-medium text-slate-700">Live Metrics</p>
          <motion.div
            className="flex-1 rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-4 text-black flex flex-col justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 opacity-60 text-green-700" />
              <p className="text-sm opacity-80 text-green-900">Link Distance</p>
            </div>
            <p className="text-3xl font-bold text-green-900">{distance} km</p>
          </motion.div>
          
          <motion.div
            className="flex-1 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 text-black flex flex-col justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 opacity-60 text-blue-700" />
              <p className="text-sm opacity-80 text-blue-900">Calculation Time</p>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={latency}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-3xl font-bold text-blue-900"
              >
                {latency} ms
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
