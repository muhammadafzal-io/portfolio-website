"use client"

import { useEffect, useState } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export default function SkillsCarousel() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    {
      name: "ReactJS",
      icon: <SiReact className="text-white" />,
      color: "from-blue-500 to-cyan-500",
      glow: "glow-border-cyan",
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs className="text-white" />,
      color: "from-gray-600 to-gray-800",
      glow: "glow-border-cyan",
    },
    {
      name: "NestJS",
      icon: <SiNestjs className="text-white" />,
      color: "from-red-500 to-pink-500",
      glow: "glow-border-purple",
    },
    {
      name: "NodeJS",
      icon: <SiNodedotjs className="text-white" />,
      color: "from-green-500 to-emerald-500",
      glow: "glow-border-cyan",
    },
    {
      name: "ExpressJS",
      icon: <SiExpress className="text-white" />,
      color: "from-yellow-500 to-orange-500",
      glow: "glow-border-purple",
    },
    {
      name: "PostgreSQL",
     icon: <SiExpress className="text-white" />,
      color: "from-blue-600 to-indigo-600",
      glow: "glow-border-cyan",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-white" />,
      color: "from-green-600 to-emerald-600",
      glow: "glow-border-purple",
    },
    {
      name: "TailwindCSS",
     icon: <SiTailwindcss className="text-white" />,
      color: "from-sky-400 to-cyan-400",
      glow: "glow-border-cyan",
    },
    {
      name: "TypeScript",
    icon: <SiTypescript className="text-white" />,
      color: "from-blue-500 to-blue-700",
      glow: "glow-border-purple",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-purple-950/5 to-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4 text-center animate-slide-up ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          Skills & Technologies
        </h2>

        <p
          className={`text-lg text-foreground/70 text-center mb-16 max-w-2xl mx-auto animate-slide-up ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          Proficient in modern development technologies, frameworks, and tools
        </p>

        {/* Infinite scrolling carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll py-8">
              {/* Duplicate skills for infinite scroll effect */}
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-32 h-32 glass-effect rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group cursor-pointer ${skill.glow}`}
                >
                  <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span
                    className={`text-sm font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent text-center`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Static grid view for mobile */}
        <div className="md:hidden grid grid-cols-3 gap-4 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`glass-effect rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 ${skill.glow}`}
            >
              <span className="text-2xl mb-2">{skill.icon}</span>
              <span
                className={`text-xs font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent text-center`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
