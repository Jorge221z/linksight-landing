import Link from "next/link"
import { Linkedin, Github } from "lucide-react"

interface FooterProps {
  minimal?: boolean
}

export function Footer({ minimal = false }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-border py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Columna Izquierda: Marca y Badges */}
            <div className="flex flex-col">
              <Link
                href="/"
                className="inline-flex items-center gap-2 mb-4 group w-fit cursor-pointer"
              >
                <img
                  src="/images/ic_logo_playstore.png"
                  alt="LinkSight Logo"
                  className="w-7.5 h-7.5 object-cover rounded-[22%] shadow-xs transition-shadow duration-300 group-hover:shadow-md"
                />
                <h2 className="text-xl font-[550] font-geist font-[family-name:var(--font-geist-sans)] text-neutral-800 dark:text-neutral-200 tracking-tight transition-colors duration-300 group-hover:text-neutral-600 dark:group-hover:text-neutral-400">
                  LinkSight
                </h2>
              </Link>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                Precision RF planning, right in your pocket.
              </p>

              {/* Launchpad Badges */}
              <div className="flex flex-col items-start gap-3 pt-1">
                {/* 1. BetaList */}
                <a
                  href="https://betalist.com/startups/linksight?utm_campaign=badge-linksight&utm_medium=badge&utm_source=badge-featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg transition-shadow duration-300 hover:shadow-md"
                  aria-label="LinkSight on BetaList"
                >
                  <img
                    src="https://betalist.com/badges/featured?id=183402&theme=color"
                    alt="LinkSight - Plan RF line-of-sight links and Fresnel zones instantly on the go | BetaList"
                    width={156}
                    height={54}
                    className="h-[46px] w-auto block"
                  />
                </a>

                {/* 2. Fazier */}
                <a
                  href="https://fazier.com/launches/linksight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl transition-shadow duration-300 hover:shadow-md"
                  aria-label="LinkSight on Fazier"
                >
                  <img
                    src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=12753&badge_type=featured&theme=dark"
                    width={270}
                    height={54}
                    alt="Fazier badge"
                    className="h-[46px] w-auto max-w-full object-contain block"
                  />
                </a>

                {/* 3. JustHunt */}
                <a
                  href="https://justhunt.co/startups/linksight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[46px] inline-flex items-center gap-3 px-3.5 bg-[#f9fafb] text-[#1f2937] border border-[#d1d5db] rounded-[13px] no-underline transition-shadow duration-300 shadow-xs hover:shadow-md"
                  aria-label="LinkSight - #1 of the Week on JustHunt"
                >
                  <div className="w-8 h-8 rounded-[8px] bg-gradient-to-b from-amber-50 to-amber-100/70 border border-amber-300/80 flex items-center justify-center shrink-0 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_1px_2px_rgba(217,119,6,0.12)]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="drop-shadow-[0_1px_1px_rgba(180,83,9,0.25)]"
                    >
                      <defs>
                        <linearGradient id="trophyGold" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FDE68A" />
                          <stop offset="35%" stopColor="#F59E0B" />
                          <stop offset="70%" stopColor="#D97706" />
                          <stop offset="100%" stopColor="#92400E" />
                        </linearGradient>
                        <linearGradient id="trophyRim" x1="12" y1="3" x2="12" y2="7" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FEF3C7" />
                          <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                      </defs>
                      {/* Left Handle */}
                      <path
                        d="M5.5 5.5H3.5a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h0.5"
                        stroke="url(#trophyGold)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      {/* Right Handle */}
                      <path
                        d="M18.5 5.5h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-0.5"
                        stroke="url(#trophyGold)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      {/* Trophy Cup Body */}
                      <path
                        d="M5.5 3.5h13v5.5c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5V3.5z"
                        fill="url(#trophyGold)"
                      />
                      {/* Rim Highlight */}
                      <path
                        d="M6.5 4.5h11"
                        stroke="url(#trophyRim)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      {/* Center Embossed Star */}
                      <path
                        d="M12 7l.7 1.4 1.5.2-1.1 1.1.3 1.5-1.4-.7-1.4.7.3-1.5-1.1-1.1 1.5-.2z"
                        fill="#FEF3C7"
                      />
                      {/* Stem */}
                      <path
                        d="M12 15.5v3"
                        stroke="url(#trophyGold)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      {/* Base Tier 1 */}
                      <path
                        d="M9 18.5h6"
                        stroke="url(#trophyGold)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      {/* Base Tier 2 (Pedestal) */}
                      <path
                        d="M7.5 20.8h9"
                        stroke="url(#trophyGold)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0 justify-center">
                    <span className="text-[10px] font-black text-[#059669] tracking-[0.6px] uppercase leading-none whitespace-nowrap">
                      #1 OF THE WEEK
                    </span>
                    <span className="text-[10.5px] text-[#4b5563] flex items-center gap-1 font-semibold leading-none mt-1 whitespace-nowrap">
                      <img
                        src="https://justhunt.co/logo.png"
                        alt="JustHunt"
                        className="w-3.5 h-3.5 rounded shadow-xs"
                      />
                      JustHunt
                    </span>
                  </div>
                </a>

                {/* 4. MicroLaunch */}
                <a
                  href="https://microlaunch.net/p/linksight?utm_source=badge-winner-microlaunch&utm_medium=badge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl transition-shadow duration-300 hover:shadow-md"
                  aria-label="LinkSight on MicroLaunch - Product of the Day"
                >
                  <img
                    src="https://wild-dust-0517.microlaunch.workers.dev/badges/potd/ml_potd_badge_v4.svg"
                    alt="Microlaunch - Product of the Day"
                    width={306}
                    height={96}
                    className="h-[46px] w-auto block object-contain"
                  />
                </a>
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
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog & Guides
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
                <li>
                  <Link
                    href="/account-deletion"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Account Deletion
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
  )
}
