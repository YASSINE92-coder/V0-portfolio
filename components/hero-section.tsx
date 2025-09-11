"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(10,102,194,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
            <img src="/professional-developer-headshot.png" alt="Yassine Chaanoune" className="w-full h-full object-cover" />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-balance">
              Hi, I'm <span className="text-primary">Yassine Chaanoune</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium text-balance">
              Full Stack Developer & Software Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              I craft modern web applications with clean code, intuitive design, and cutting-edge technologies.
              Passionate about creating digital experiences that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="font-medium" asChild>
              <Link href="#projects">
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="font-medium bg-transparent" asChild>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Tech Stack Preview */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-card border border-border rounded-full text-sm font-medium text-card-foreground hover:bg-primary/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll to about section</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
