import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import SkillsCarousel from "@/components/skills-carousel"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <SkillsCarousel />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
