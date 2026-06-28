"use client"

import { Check } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { RealtimePropertyCard } from "./realtime-property-card"

const features = [
  "Drop pins with exact GPS coordinates.",
  "5 free calculations every single day.",
  "Adjustable mast heights and frequencies.",
  "Visual clear/obstructed indicators.",
]

const allTransactions = [
  { name: "Côte d'Azur Villa", amount: "+$2,400", category: "Rental received", color: "from-emerald-400 to-teal-500" },
  { name: "Paris 11 Apartment", amount: "+$1,850", category: "Rental received", color: "from-blue-400 to-indigo-500" },
  { name: "Bordeaux House", amount: "+$1,200", category: "Rental received", color: "from-amber-400 to-orange-500" },
  { name: "Chamonix Chalet", amount: "+$3,500", category: "Rental received", color: "from-rose-400 to-pink-500" },
  { name: "Lyon Studio", amount: "+$750", category: "Rental received", color: "from-violet-400 to-purple-500" },
  { name: "Marseille Loft", amount: "+$1,100", category: "Rental received", color: "from-cyan-400 to-blue-500" },
  { name: "Provence Farmhouse", amount: "+$2,800", category: "Rental received", color: "from-lime-400 to-green-500" },
  { name: "Lille Duplex", amount: "+$950", category: "Rental received", color: "from-fuchsia-400 to-pink-500" },
]

export function FeaturesSection() {
  const [balance, setBalance] = useState(12458.32)
  const [monthlyGrowth] = useState(23.5)
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const scrollPosition = useRef(0)
  const lastUpdateTime = useRef(0)

  const tripleTransactions = [...allTransactions, ...allTransactions, ...allTransactions]

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!scrollRef.current) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      if (!lastUpdateTime.current) lastUpdateTime.current = timestamp
      const deltaTime = timestamp - lastUpdateTime.current
      lastUpdateTime.current = timestamp

      scrollPosition.current += (deltaTime / 1000) * 35

      const singleSetHeight = scrollRef.current.scrollHeight / 3

      if (scrollPosition.current >= singleSetHeight) {
        scrollPosition.current = 0

        const randomTransaction = allTransactions[Math.floor(Math.random() * allTransactions.length)]
        const amount = Number.parseFloat(randomTransaction.amount.replace(/[$,]/g, ""))
        setBalance((prev) => prev + amount)
      }

      scrollRef.current.style.transform = `translateY(-${scrollPosition.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-center pointer-events-none z-0">
        <span className="font-bold text-center text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] leading-none tracking-tighter text-zinc-100 whitespace-nowrap">
          MANAGE
        </span>
      </div>

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
                  className="group flex items-center p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 gap-3 cursor-default"
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
