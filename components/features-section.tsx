"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { RealtimePropertyCard } from "./realtime-property-card"

const features = [
  "Drop pins with exact GPS coordinates.",
  "5 free calculations every single day.",
  "Adjustable mast heights and frequencies.",
  "Visual clear/obstructed indicators.",
]

export function FeaturesSection() {

  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <RealtimePropertyCard />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">
                Your RF Dashboard in your pocket
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Calculate point-to-point links instantly, check line of sight, and get the information you need right when you're on the mountain or rooftop.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  viewport={{ once: true }}
                  className="group flex items-center p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-[border-color,box-shadow] duration-300 gap-3 cursor-default"
                >
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <Check className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-slate-700 leading-tight">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
