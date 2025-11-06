"use client";

import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-10 lg:px-20 overflow-hidden bg-gradient-to-br from-[#090013] via-[#0a0120] to-[#0b0223]"
    >
      {/* Glowing Orbs (animated background) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-[#00ff9d]/20 blur-3xl rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#ff2ebd]/15 blur-3xl rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#05d7ff]/10 blur-3xl rounded-full animate-float" />
      </div>

      <div className="max-w-5xl mx-auto text-center lg:text-left">
        {/* Section Title */}
        <Parallax speed={-5}>
          <h2
            className={`text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-[#00ff9d] via-[#ff2ebd] to-[#05d7ff] bg-clip-text text-transparent mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
        </Parallax>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Description */}
          <Parallax speed={3}>
            <div
              className={`space-y-6 text-lg text-gray-300 leading-relaxed transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p>
                I'm a full-stack software engineer based in Lahore, Pakistan,
                passionate about creating{" "}
                <span className="text-[#00ff9d] font-semibold">scalable</span>{" "}
                and{" "}
                <span className="text-[#05d7ff] font-semibold">performant</span>{" "}
                web applications. I specialize in building digital experiences
                that merge functionality with modern UI/UX.
              </p>
              <p>
                My experience spans multiple domains — from{" "}
                <span className="text-[#ff2ebd] font-semibold">fintech</span> to{" "}
                <span className="text-[#05d7ff] font-semibold">e-commerce</span>{" "}
                — delivering complex backend systems, automation workflows, and
                real-time features with clean, maintainable code.
              </p>
              <p>
                Outside of coding, I love exploring new tech, contributing to
                open-source, and sharing insights with the developer community.
              </p>
            </div>
          </Parallax>

          {/* Right: Skills Section */}
          <Parallax speed={-5}>
            <div className="space-y-10">
              {/* Core Technologies */}
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#00ff9d] via-[#05d7ff] to-[#00ffea] bg-clip-text text-transparent mb-4">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "NestJS",
                
                  
                    "Node.js",
                    "Express.js",
                      "Next.js",
                      "React",
                    "JavaScript",
                    "TypeScript",
                    "MySQL",
                    "PostgreSQL",
                    "MongoDB",
                    "Postman",
                    "swagger",
                    "Appollo",
                    "AWS",
                    "Stripe",
                  ].map((tech, i) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-[#00ff9d]/20 to-[#05d7ff]/20 text-[#05d7ff] rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:from-[#00ff9d]/40 hover:to-[#05d7ff]/40 cursor-default shadow-[0_0_15px_rgba(5,215,255,0.15)]"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Skills */}
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff2ebd] via-[#ff00ff] to-[#ff7ae5] bg-clip-text text-transparent mb-4">
                  Additional Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Docker",
                    "Material-UI",
                    "Tailwind CSS",
                    "Git",
                    "GraphQL",
                    "REST APIs",
                    "WebSockets",
                  ].map((skill, i) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-[#ff2ebd]/20 to-[#05d7ff]/20 text-[#ff2ebd] rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:from-[#ff2ebd]/40 hover:to-[#05d7ff]/40 cursor-default shadow-[0_0_15px_rgba(255,46,189,0.15)]"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
