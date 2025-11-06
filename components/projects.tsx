"use client"

import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Parallax } from "react-scroll-parallax"

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true)
    }
  }, [isInView, isVisible])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 25)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, text, delay])

  return (
    <span ref={ref} className="font-mono">
      {displayedText}
      {displayedText.length < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Mayfair Platform",
      myRole: "Back End Developer",
      description:
        "Built customer profile management and authentication systems, integrated SendGrid for dynamic email templates, and implemented secure password reset and OTP verification within NestJS APIs",
      technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "SendGrid"],
      link: "#",
    },
    {
      title: "Hiring Management System",
      myRole: "Full Stack Developer",
      description:
        "Architected backend from ERD to production using NestJS with modular design and JWT-based authentication. Built responsive Next.js frontend, integrated GraphQL APIs via Apollo Client, and implemented PayFast payments. Build chat system using WebSockets",
      technologies: ["Next.js", "NestJS", "TypeScript", "GraphQL", "PostgreSQL", "Socket.io"],
      link: "#",
    },
    {
      title: "Rasayi Workspace",
      myRole: "Full Stack Engineer",
      description:
        "Developed and integrated GraphQL APIs (tested via Apollo Client) for procurement and inventory workflows. Automated data synchronization between the database and Google Sheets using Google APIs, and scheduled backend tasks via Supabase cron jobs",
      technologies: ["Nest.js", "React.js", "TypeScript", "PostgreSQL", 'Google Sheets', "Google APIs"],
      link: "#",
    },
    {
      title: "Taleem Workspace",
      myRole: "Software Engineer",
      description:
        "Developed multiple dynamic loan application forms with Excel sync and automated data reporting. Managed modules for customers, orders, and transactions ensuring optimized backend workflows and reporting accuracy.",
      technologies: ["Nest.js", "React.js", "TypeScript", "PostgreSQL"],
      link: "#",
    },
     {
      title: "KalTech Website",
      myRole: "Front End Developer",
      description:
        "Developed a fully responsive, animated landing page using Next.js, Tailwind CSS, and Parallax Motion, implementing dynamic content and smooth scroll-based animations",
      technologies: [ "Next.js", "TypeScript", "material-ui"],
      link: "#",
    },
   {
  title: "Ecommerce Platform",
  myRole: "Software Engineer",
  description:
    "Developed an eCommerce platform using WooCommerce, integrating REST APIs for custom cart and checkout workflows. Implemented dynamic installment plan calculations based on time periods and total amount, and automated payment reminder emails for due and maturity dates via RESTful services.",
  technologies: ["WooCommerce", "WordPress", "REST API", "JavaScript", "PHP", "MySQL"],
  link: "#",
},

  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        Muhammad Afzal - Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Parallax key={index} speed={index % 2 === 0 ? 8 : -8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full relative"
              >
                <div className="h-full rounded-xl overflow-hidden bg-[#0a0f1a] border border-slate-700 hover:border-cyan-400 transition-all duration-300 group shadow-lg hover:shadow-cyan-400/20 flex flex-col">
                  {/* Header */}
                  <div className="bg-[#0d1526] px-4 py-3 flex items-center gap-2 border-b border-slate-700/60 flex-shrink-0">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-pink-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="ml-3 text-xs text-cyan-300 font-mono">
                      {project.title.replace(/\s+/g, "_").toLowerCase()}.js
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow overflow-hidden font-mono text-sm leading-relaxed text-slate-300">
                    <div className="text-pink-400">const</div>
                    <div className="pl-4">
                      <span className="text-cyan-400">project</span> <span className="text-pink-400">=</span> {"{"}
                    </div>

                    <div className="pl-8 mt-2">
                      <div>
                        <span className="text-cyan-400">title</span>:{" "}
                        <span className="text-yellow-400">"{project.title}"</span>,
                      </div>
                      <div>
                        <span className="text-cyan-400">myRole</span>:{" "}
                        <span className="text-orange-400">"{project.myRole}"</span>,
                      </div>
                      <div>
                        <span className="text-cyan-400">description</span>:{" "}
                        <span className="text-blue-300">
                          "<TypingText text={project.description} delay={index * 100} />"
                        </span>
                        ,
                      </div>
                      <div>
                        <span className="text-cyan-400">technologies</span>: [ 
                        {project.technologies.map((tech, i) => (
                          <span key={tech} className="text-green-400">
                            "{tech}"{i < project.technologies.length - 1 ? ", " : ""}
                          </span>
                        ))}] 
                      </div>
                    </div>

                    <div className="text-pink-400 pl-4 mt-3">{"};"}</div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6">
                      <Button
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-white"
                        asChild
                      >
                        <a href={project.link}>→ View Project</a>
                      </Button>
                    </motion.div>
                  </div>

                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-cyan-400/5 rounded-xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}
