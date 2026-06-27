"use client"
import { useEffect, useState, useRef } from "react"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = 1.6

      // Saltar el primer segundo al cargar el vídeo
      const onLoaded = () => {
        video.currentTime = 1
      }
      
      // Cuando acabe, volver al segundo 1 (en vez de al 0) para omitir la cámara parada
      const onEnded = () => {
        video.currentTime = 1
        video.play()
      }

      video.addEventListener('loadedmetadata', onLoaded)
      video.addEventListener('ended', onEnded)
      
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

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
          <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" src="/hero-bg.mp4" />
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
          HOMIE
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <div
            className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <h1 className="font-serif text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] font-normal leading-tight mb-6 w-full px-4 max-w-6xl mx-auto text-balance">
              <AnimatedText text="Find your home away from home" delay={0.3} />
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative">
            <div
              className={`relative w-[234px] md:w-[281px] lg:w-[351px] will-change-transform transition-all duration-[1500ms] ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
              }`}
            >
              <img src="/images/iphone-frame.png" alt="LinkSight App" className="w-full h-auto relative z-10 pointer-events-none" />
              <div className="absolute top-[2.5%] left-[5.5%] w-[89%] h-[95%] rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden z-20 bg-black">
                {/* Desplazamos el vídeo hacia arriba un 5% y lo hacemos más alto para recortar la barra de estado superior */}
                <video autoPlay loop muted playsInline className="absolute w-full h-[105%] -top-[5%] left-0 object-cover" src="/linksight_demo.mp4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
