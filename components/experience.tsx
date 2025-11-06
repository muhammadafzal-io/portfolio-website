"use client"

import { useEffect, useState } from "react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const experiences = [
    {
      title: "Software Engineer (Full Stack)",
      company: "KalPay, LUMS Lahore",
      period: "March 2022 - Present",
      location: "Lahore, Pakistan",
      description:
        "Contributing as a Full Stack Engineer to fintech and SaaS platforms, specializing in backend systems, integrations, and automation.",
      highlights: [
        "Engineered and maintained full-stack applications using React, Next.js, NestJS, and Supabase.",
        "Integrated RESTful and GraphQL APIs, managing PostgreSQL, MySQL, and MongoDB databases.",
        "Implemented secure PayFast and Stripe payment gateways, and automated notifications using SendGrid and Nodemailer.",
        "Developed procurement and inventory systems, optimizing data flow and backend processes.",
        "Enhanced Taleem Loan Portal — created dynamic loan forms, Excel sync automation, and real-time financial data reporting.",
        "Built OTP verification, password reset, and user profile management for Mayfaire project.",
        "Designed and implemented a Hiring Management System (NestJS + GraphQL + NextJS) with role-based access and real-time chat.",
        "Created multiple fully responsive websites using React.js and Next.js with optimized performance.",
        "Leveraged AI-powered website builders (V0, RaddyAI) for rapid MVP development, deployed on AWS and shared servers.",
        "Maintained strong client communication with international teams ensuring delivery efficiency.",
      ],
      color: "from-[#ffb300] to-[#ffd700]",
    },
    {
      title: "Associate Backend Engineer",
      company: "VieApps Studio",
      period: "Oct 2021 - Feb 2022",
      location: "Lahore, Pakistan",
      description:
        "Developed backend services and WordPress-based sites, focusing on data management and system reliability.",
      highlights: [
        "Built scalable backend APIs using Node.js and Express.js.",
        "Managed relational and NoSQL databases including MySQL and MongoDB.",
        "Customized WordPress sites and developed plugins to enhance store functionality.",
        "Used Git for project version control and collaborative development.",
      ],
      color: "from-[#00d4ff] to-[#0077ff]",
    },
    {
      title: "Full Stack Developer",
      company: "PowerHouse",
      period: "June 2021 - Oct 2021",
      location: "Remote",
      description:
        "Worked as a Full Stack Developer focusing on backend APIs and system automation.",
      highlights: [
        "Developed and optimized backend workflows using Node.js, NestJS, and Supabase.",
        "Implemented secure authentication and scheduling services.",
        "Collaborated closely with frontend teams to align API structures with UI/UX needs.",
      ],
      color: "from-[#ff6b6b] to-[#f94d6a]",
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-cyan-50/5 to-background dark:via-cyan-950/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00ff9d] via-[#ff2ebd] to-[#05d7ff] bg-clip-text text-transparent text-center mb-12 animate-slide-up ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`border-l-4 border-transparent bg-gradient-to-r from-transparent to-transparent hover:from-yellow-500/5 hover:to-yellow-400/5 pl-8 pb-8 relative rounded-lg transition-all duration-300 animate-slide-up ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div
                className={`absolute -left-4 top-0 w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full shadow-lg shadow-yellow-400/50 animate-pulse-glow`}
              ></div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                <p
                  className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                >
                  {exp.company}
                </p>
                <p className="text-sm text-foreground/60">
                  {exp.period} • {exp.location}
                </p>
              </div>

              <p className="text-foreground/80 mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-foreground/70 hover:text-foreground transition-colors duration-300"
                  >
                    <span
                      className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mt-1`}
                    >
                      ▸
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
