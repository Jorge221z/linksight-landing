"use client"

import { useState, useEffect, useRef } from "react"

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-32 px-6 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 hidden sm:flex justify-center pointer-events-none z-0">
        <span className="font-bold text-center text-[14vw] md:text-[12vw] leading-none tracking-tighter text-zinc-200/80 whitespace-nowrap">
          PRECISION
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={sectionRef} className="relative px-6 lg:px-8 py-16 lg:py-10 overflow-hidden rounded-3xl">
          {/* Background image that spans full width */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/field-engineer.jpg"
              alt="Telecommunications engineer in the field using smartphone for RF planning"
              className={`w-full h-full object-cover object-[center_30%] transition-transform duration-1000 ease-out ${
                isVisible ? "scale-100" : "scale-110"
              }`}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Text content on top */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:col-start-2">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80 font-medium mb-4">Our product</p>
              <h2 className="font-sans md:text-4xl lg:text-5xl font-medium text-white text-balance mb-8 text-5xl drop-shadow-md">
                Engineered for the field
              </h2>
              <div className="space-y-6 text-white/90 leading-relaxed drop-shadow">
                <p>
                  LinkSight removes the guesswork from RF planning. Instantly calculate line of sight, analyze Fresnel zone clearance, and export professional PDF reports directly from your phone.
                </p>
              </div>
              <div className="mt-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
