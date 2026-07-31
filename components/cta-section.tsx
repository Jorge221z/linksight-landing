import Image from "next/image"

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.linksight.app"

export function CTASection() {
  return (
    <section className="pt-32 pb-4 px-6 relative overflow-hidden">

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
            Available Now…
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight font-serif text-zinc-900 mb-5">
            Your RF tool is live.<br className="hidden sm:block" /> Download it free.
          </h2>
        </div>

        {/* Card glassmorphism — badge + subtexto */}
        <div className="
          relative rounded-3xl px-8 py-10 sm:px-12 sm:py-12 text-center mb-20
          bg-white/10 backdrop-blur-md
          border border-white/30
          shadow-[0_8px_40px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)]
        ">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              Precision RF planning, right in your pocket.<br />Free to start. No credit card needed.
            </p>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 transition-opacity hover:opacity-80 duration-200"
              aria-label="Download on Google Play"
            >
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={432}
                height={128}
                className="h-52 w-auto"
                priority
              />
            </a>
          </div>
        </div>



      </div>
    </section>
  )
}
