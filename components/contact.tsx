"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-pink-950/5 to-background relative overflow-hidden"
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className={`mb-12 animate-slide-up ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">Get In Touch</h2>
          <p className="text-lg text-foreground/70 text-center">
            Have a project in mind? Let's collaborate and build something amazing together.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 glass-effect p-8 rounded-xl animate-slide-up ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-white"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </Button>
        </form>

        <div
          className={`mt-12 pt-12 border-t border-border animate-slide-up ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-center text-foreground/60 mb-6">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
            <a
              href="mailto:muhammad.afzal.110190@gmail.com"
              className="text-primary hover:underline font-medium transition-all duration-300 hover:text-cyan-400"
            >
              muhammad.afzal.110190@gmail.com
            </a>
            <a
              href="tel:+92457066680"
              className="text-primary hover:underline font-medium transition-all duration-300 hover:text-cyan-400"
            >
              +92 345 706 6680
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-afzal-754966261/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium transition-all duration-300 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
