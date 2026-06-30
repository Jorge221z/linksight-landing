"use client"
import { useEffect, useState, useRef } from "react"
import { AnimatedText } from "./animated-text"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = 1.6

      // Saltar el primer segundo al cargar el vídeo
      const onLoaded = () => {
        video.currentTime = 1
        video.play().catch(e => console.log("Autoplay prevented:", e))
      }
      
      // Cuando acabe, volver al segundo 1 (en vez de al 0) para omitir la cámara parada
      const onEnded = () => {
        video.currentTime = 1
        video.play().catch(e => console.log("Autoplay prevented:", e))
      }

      video.addEventListener('loadedmetadata', onLoaded)
      video.addEventListener('ended', onEnded)
      
      // Intentar reproducir explícitamente en el primer render para navegadores estrictos como Chrome
      video.muted = true
      video.play().catch(e => console.log("Autoplay prevented:", e))

      // Si el vídeo ya está cargado cuando se monta el componente
      if (video.readyState >= 1) {
        video.currentTime = 1
      }

      return () => {
        video.removeEventListener('loadedmetadata', onLoaded)
        video.removeEventListener('ended', onEnded)
      }
    }
  }, [])

  // Se eliminó la animación controlada por JS/React State para evitar saltos en la hidratación (Layout Shift)

  useEffect(() => {
    let rafId: number
    let currentProgress = 0

    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 400
      const targetProgress = Math.min(scrollY / maxScroll, 1)

      const smoothUpdate = () => {
        currentProgress += (targetProgress - currentProgress) * 0.1

        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          setScrollProgress(currentProgress)
          rafId = requestAnimationFrame(smoothUpdate)
        } else {
          setScrollProgress(targetProgress)
        }
      }

      cancelAnimationFrame(rafId)
      smoothUpdate()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const borderRadius = easeOutCubic(scrollProgress) * 48
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  return (
    <section className="pt-32 pb-12 px-6 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 top-0">
        <div
          className="w-full will-change-transform overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            height: `${heightVh}vh`,
          }}
        >
          <video ref={videoRef} autoPlay muted defaultMuted playsInline className="w-full h-full object-cover" src="/hero-bg.mp4" />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-[5] flex items-end justify-center"
        style={{
          transform: `translateY(${scrollProgress * 150}px)`,
          opacity: 1 - scrollProgress * 0.8,
          height: "100%",
        }}
      >
        <span
          className="block text-white font-bold text-[28vw] sm:text-[25vw] md:text-[22vw] lg:text-[20vw] tracking-tighter select-none text-center leading-none"
          style={{ marginBottom: "0" }}
        >
          LINKSIGHT
        </span>
      </div>

      <style>{`
        @keyframes heroFadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroSlideUp {
          from {
            opacity: 0;
            transform: translateY(120px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-title-anim {
          opacity: 0;
          animation: heroFadeInDown 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        .hero-mockup-anim {
          opacity: 0;
          animation: heroSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <div className="hero-title-anim">
            <h1 className={`${spaceGrotesk.className} text-[2.2rem] min-[380px]:text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] font-bold leading-[1.15] mb-6 w-full px-4 max-w-7xl mx-auto text-black flex flex-col items-center gap-2`}>
              <span className="block lg:whitespace-nowrap max-w-full"><AnimatedText text="Flawless Line of Sight." delay={0.3} /></span>
              <span className="block lg:whitespace-nowrap max-w-full"><AnimatedText text="Anywhere on Earth." delay={0.5} /></span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative">
            <div className="relative w-[234px] md:w-[281px] lg:w-[351px] aspect-[609/1243] will-change-transform hero-mockup-anim">
              {/* Imagen del iPhone (en el fondo) */}
              <img
                src="/images/iphone-frame.png"
                alt="LinkSight App"
                className="w-full h-auto relative z-10 pointer-events-none"
              />
              {/* Contenedor del video (encima de la imagen, recortado por border-radius) */}
              <div className="absolute top-[2.5%] left-[5.5%] w-[89%] h-[95%] rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden z-20 bg-black isolate transform-gpu">
                {/* Desplazamos el vídeo hacia arriba un 5% y lo hacemos más alto para recortar la barra de estado superior */}
                <video
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  preload="auto"
                  className="absolute w-full h-[105%] -top-[5%] left-0 object-cover transform-gpu"
                  src="/linksight_demo.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
