"use client"

import { Globe, Radio, FileText, Eye, ExternalLink } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const services = [
  {
    icon: Globe,
    title: "Global Topography",
    description: "Integrated SRTM90m data for instant elevation maps without relying on heavy desktop software.",
    hasPreview: false,
  },
  {
    icon: FileText,
    title: "Client-Ready PDF Reports",
    description: "Export complete engineering feasibility studies with elevation profiles, clearance metrics, and company branding in a single tap.",
    hasPreview: true,
  },
  {
    icon: Radio,
    title: "Fresnel Intelligence",
    description: "Precise Fresnel zone clearance calculations across sub-GHz, Wi-Fi, microwave, and custom frequencies (100 MHz – 60 GHz).",
    hasPreview: false,
  },
]

function AnimatedIcon({ Icon, delay = 0 }: { Icon: any; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (iconRef.current) {
      observer.observe(iconRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={iconRef} className="relative">
      <Icon
        className={`text-foreground h-16 w-16 ${isVisible ? "animate-draw-icon" : ""}`}
        strokeWidth={1}
        style={{
          strokeDasharray: isVisible ? undefined : 1000,
          strokeDashoffset: isVisible ? undefined : 1000,
        }}
      />
    </div>
  )
}

export function ServicesSection() {
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
    <section id="tools" className="py-24 px-6 relative overflow-hidden">
      <style jsx>{`
        @keyframes drawPath {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }
        :global(.animate-draw-icon) :global(path),
        :global(.animate-draw-icon) :global(line),
        :global(.animate-draw-icon) :global(polyline),
        :global(.animate-draw-icon) :global(circle),
        :global(.animate-draw-icon) :global(rect) {
          animation: drawPath 2s ease-out forwards;
        }
      `}</style>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Advanced RF Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to plan, calculate, and document your wireless links from anywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl hover:bg-zinc-50 transition-colors duration-300 text-center flex flex-col items-center"
            >
              <div className="mb-6 flex justify-center">
                <AnimatedIcon Icon={service.icon} delay={index * 0.2} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>

              {service.hasPreview && (
                <div className="mt-5">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 border border-blue-200/80 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5 text-blue-600" />
                        <span>Preview Sample PDF</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                      <DialogHeader className="pr-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                          <DialogTitle className="text-base sm:text-lg font-semibold text-left">
                            Client-Ready PDF Report
                          </DialogTitle>
                          <a
                            href="/images/pdf-report-preview.png"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline font-medium w-fit"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Open full size
                          </a>
                        </div>
                        <DialogDescription className="text-xs text-muted-foreground text-left mt-1 leading-relaxed">
                          Sample feasibility export generated on-the-go with LinkSight Pro — includes site elevation profiles, clearance metrics, and company branding.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-3 rounded-xl overflow-hidden border border-border/80 shadow-md bg-zinc-100 p-2 sm:p-4 flex justify-center">
                        <img
                          src="/images/pdf-report-preview.png"
                          alt="LinkSight PDF Report Preview"
                          className="max-h-[60vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
