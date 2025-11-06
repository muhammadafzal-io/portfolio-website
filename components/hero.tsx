"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <ParallaxProvider>
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 relative overflow-hidden bg-gradient-to-br from-[#090013] via-[#0a0120] to-[#0b0223]">
        {/* Soft Glowing Backgrounds */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-float" />
        </div>

        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-center lg:text-left max-w-2xl z-10"
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-400/40 text-purple-400 text-sm font-medium mb-4 tracking-wide">
            Full Stack Engineer
          </span>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#00ff9d] via-[#ff2ebd] to-[#05d7ff] bg-clip-text text-transparent mb-6 leading-tight drop-shadow-[0_0_10px_rgba(255,0,255,0.3)] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-700`}
          >
            Muhammad Afzal
          </h1>

          <p
            className={`text-lg sm:text-xl text-gray-300 mb-8 max-w-xl transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Crafting scalable and high-performance web applications with{" "}
            <span className="text-[#00ff9d] font-semibold">React</span>,{" "}
            <span className="text-[#ff2ebd] font-semibold">Next.js</span>, and{" "}
            <span className="text-[#05d7ff] font-semibold">Nest.js</span>. Dedicated to clean
            code, modern design, and seamless user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="#projects">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#ff2ebd] to-[#05d7ff] hover:from-[#05d7ff] hover:to-[#ff2ebd] text-white font-semibold shadow-lg hover:shadow-[#05d7ff]/30 transition-all duration-300"
              >
                View My Work
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border border-[#00ff9d]/70 text-[#00ff9d] hover:bg-[#00ff9d]/10 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Developer Image with Parallax */}
        <Parallax speed={10}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-10 lg:mt-0 flex justify-center lg:justify-end"
          >
            <Image
              src="/22.png"
              alt="Developer Illustration"
              width={500}
              height={500}
              className="drop-shadow-[0_0_25px_rgba(255,0,255,0.4)] rounded-2xl"
            />
          </motion.div>
        </Parallax>
      </section>
    </ParallaxProvider>
  )
}
