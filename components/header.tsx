"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.linksight.app"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = true
  const router = useRouter()
  const pathname = usePathname()

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
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
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
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer shrink-0">
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
          </Link>

          {/* Mobile/Tablet Google Play Badge - Centrado entre logo y menú */}
          <div className="flex md:hidden flex-1 items-center justify-center px-1">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80 duration-200 -my-[34px] sm:-my-[40px]"
              aria-label="Download on Google Play"
            >
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={432}
                height={128}
                className="h-24 sm:h-28 w-auto"
                priority
              />
            </a>
          </div>

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
            <Link
              href="/pricing"
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={`text-sm transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Blog
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

          {/* Desktop Google Play Badge */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80 duration-200 -my-[52px]"
              aria-label="Download on Google Play"
            >
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={432}
                height={128}
                className="h-36 w-auto"
                priority
              />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={`md:hidden transition-colors duration-300 shrink-0 ${isScrolled ? "text-black" : "text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`transition-colors cursor-pointer ${
                isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Blog
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
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="transition-opacity hover:opacity-80 duration-200 w-fit -my-[46px]"
                aria-label="Download on Google Play"
              >
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={432}
                  height={128}
                  className="h-32 w-auto"
                />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>

    </>
  )
}
