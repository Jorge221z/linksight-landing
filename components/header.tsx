"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { BetaForm } from "@/components/beta-form"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [betaOpen, setBetaOpen] = useState(false)
  const isScrolled = true
  const router = useRouter()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)

    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    } else {
      router.push(`/#${targetId}`)
      setIsOpen(false)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "px-4 pt-4" : ""}`}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl border border-zinc-200 px-6 py-3"
            : "bg-background/90 backdrop-blur-md px-6 py-5"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/ic_logo_playstore.png"
              alt="LinkSight Logo"
              className="w-10 h-10 object-cover rounded-[22%] shadow-sm"
            />
            <span
              className={`text-lg font-medium tracking-tight transition-colors duration-300 ${isScrolled ? "text-black" : "text-foreground"}`}
            >
              LinkSight
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "features")}
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Features
            </a>
            <a
              href="#use-cases"
              onClick={(e) => handleSmoothScroll(e, "use-cases")}
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Use Cases
            </a>
            <a
              href="#tools"
              onClick={(e) => handleSmoothScroll(e, "tools")}
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Tools
            </a>
            <Link
              href="/pricing"
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pricing
            </Link>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setBetaOpen(true)}
              className={`relative flex items-center gap-0 border rounded-full pl-5 pr-1 py-1 transition-all duration-300 group overflow-hidden cursor-pointer ${
                isScrolled ? "border-zinc-300" : "border-border"
              }`}
            >
              <span
                className={`absolute inset-0 rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ${
                  isScrolled ? "bg-black" : "bg-foreground"
                }`}
              />
              <span
                className={`text-sm pr-3 relative z-10 transition-colors duration-300 ${
                  isScrolled ? "text-black group-hover:text-white" : "text-foreground group-hover:text-background"
                }`}
              >
                Join Closed Beta
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                <ArrowRight
                  className={`w-4 h-4 group-hover:opacity-0 absolute transition-opacity duration-300 ${
                    isScrolled ? "text-black" : "text-foreground"
                  }`}
                />
                <ArrowUpRight
                  className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isScrolled ? "text-black group-hover:text-white" : "text-foreground group-hover:text-background"
                  }`}
                />
              </span>
            </button>
          </div>

          <button
            className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-black" : "text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav
            className={`md:hidden mt-6 pb-6 flex flex-col gap-4 border-t pt-6 ${
              isScrolled ? "border-zinc-200" : "border-border"
            }`}
          >
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "features")}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Features
            </a>
            <a
              href="#use-cases"
              onClick={(e) => handleSmoothScroll(e, "use-cases")}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Use Cases
            </a>
            <a
              href="#tools"
              onClick={(e) => handleSmoothScroll(e, "tools")}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Tools
            </a>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pricing
            </Link>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FAQ
            </a>
            <div
              className={`flex flex-col gap-3 mt-4 pt-4 border-t ${isScrolled ? "border-zinc-200" : "border-border"}`}
            >
              <button
                onClick={() => { setBetaOpen(true); setIsOpen(false) }}
                className={`relative flex items-center gap-0 border rounded-full pl-5 pr-1 py-1 w-fit transition-all duration-300 group overflow-hidden cursor-pointer ${
                  isScrolled ? "border-zinc-300" : "border-border"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ${
                    isScrolled ? "bg-black" : "bg-foreground"
                  }`}
                />
                <span
                  className={`text-sm pr-3 relative z-10 transition-colors duration-300 ${
                    isScrolled ? "text-black group-hover:text-white" : "text-foreground group-hover:text-background"
                  }`}
                >
                  Join Closed Beta
                </span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                  <ArrowRight
                    className={`w-4 h-4 group-hover:opacity-0 absolute transition-opacity duration-300 ${
                      isScrolled ? "text-black" : "text-foreground"
                    }`}
                  />
                  <ArrowUpRight
                    className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      isScrolled ? "text-black group-hover:text-white" : "text-foreground group-hover:text-background"
                    }`}
                  />
                </span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>

    {/* Modal Beta */}
    <Dialog open={betaOpen} onOpenChange={setBetaOpen}>
      <DialogContent className="sm:max-w-md rounded-2xl border border-zinc-200 p-6 sm:p-8">
        <DialogHeader className="text-center sm:text-center mb-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-3">
            Closed Beta
          </p>
          <DialogTitle className="text-2xl font-normal font-serif text-zinc-900 leading-snug">
            Get early access to LinkSight
          </DialogTitle>
          <DialogDescription className="text-zinc-500 text-sm leading-relaxed mt-2">
            Join the closed beta and start calculating line of sight with unprecedented precision. We&apos;ll send you the Google Play invite directly.
          </DialogDescription>
        </DialogHeader>
        <BetaForm />
      </DialogContent>
    </Dialog>
    </>
  )
}
