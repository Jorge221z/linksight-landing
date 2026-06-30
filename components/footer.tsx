import Link from "next/link"
import { Twitter, Linkedin, Instagram, Facebook, Github } from "lucide-react"
import Image from "next/image"

interface FooterProps {
  minimal?: boolean
}

export function Footer({ minimal = false }: FooterProps) {
  return (
    <div className="relative">
      {!minimal && (
        <>
          <div className="absolute -top-[20vw] left-0 right-0 w-full h-[50vw] z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/footer-bg.jpg"
              alt="Telecommunications tower at sunset with digital topographic lines"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -top-[15vw] left-0 right-0 flex items-end justify-center overflow-visible pointer-events-none z-10">
            <h2 className="font-bold text-center text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] leading-[0.85] tracking-tighter text-white whitespace-nowrap">
              LINKSIGHT
            </h2>
          </div>
        </>
      )}

      <footer id="contact" className="relative z-20 border-t border-border py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Columna Izquierda: Marca */}
            <div>
              <Link href="#" className="flex items-center gap-2 mb-4 group w-fit">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
                    <path d="m9 15 3-3" />
                    <path d="M17 13a6 6 0 0 0-6-6" />
                    <path d="M21 13A10 10 0 0 0 11 3" />
                  </svg>
                </div>
                <span className="text-base font-medium text-foreground">LinkSight</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                Line of sight and Fresnel zone calculator for RF engineers.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Columna Central: Product & Support */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Product & Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:jorgemunoz.labs@gmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna Derecha: Legal */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Barra Inferior */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              © 2026 LinkSight. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs text-zinc-500">
              <span>
                Designed & built by{" "}
                <a
                  href="https://jorgemunoz.pro/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground underline decoration-zinc-400 underline-offset-2 transition-colors font-medium"
                >
                  Jorge Muñoz
                </a>
              </span>
              <span className="text-zinc-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Jorge221z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jorge-mu%C3%B1oz-castillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
