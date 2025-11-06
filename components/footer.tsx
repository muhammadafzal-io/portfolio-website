export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Muhammad Afzal</h3>
            <p className="text-foreground/60">Full Stack Software Engineer</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground/60">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-foreground/60">
              <li>
                <a
                  href="https://github.com/muhammadafzal-io?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-afzal-754966261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:muhammad.afzal.110190@gmail.com" className="hover:text-primary transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60">
          <p>&copy; {currentYear} Muhammad Afzal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
