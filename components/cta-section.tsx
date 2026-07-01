import { BetaButton } from "./beta-button"

export function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">

      {/* Texto decorativo de fondo */}
      <div className="absolute inset-0 hidden lg:flex items-start justify-center pt-[18%] pointer-events-none select-none">
        <span className="font-bold text-center text-[14vw] md:text-[12vw] leading-none tracking-tighter text-zinc-200/90 whitespace-nowrap">
          CALCULATE
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Título fuera de la card */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
            Closed Beta
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight font-serif text-zinc-900 mb-5">
            Ready to plan your<br className="hidden sm:block" /> wireless links?
          </h2>
        </div>

        {/* Card glassmorphism — solo el botón */}
        <div className="
          relative rounded-3xl px-8 py-10 sm:px-12 sm:py-12 text-center mb-20
          bg-white/10 backdrop-blur-md
          border border-white/30
          shadow-[0_8px_40px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)]
        ">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              Join the closed beta and start calculating line of sight with unprecedented precision.
            </p>
            <BetaButton className="mt-6" />
          </div>
        </div>


        {/* Stats fuera de la card */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="text-center">
            <p className="text-6xl font-light text-foreground">100+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Beta Users</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-zinc-200" />
          <div className="text-center">
            <p className="text-6xl font-light text-foreground">148M+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Km² Mapped</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-zinc-200" />
          <div className="text-center">
            <p className="text-6xl font-light text-foreground">&lt; 1s</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Latency</p>
          </div>
        </div>

      </div>
    </section>
  )
}
