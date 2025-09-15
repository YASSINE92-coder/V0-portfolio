"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"


export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" >
      
      {/* Other background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hi, I'm <span className="text-primary">Yassine Chaanoune</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-medium text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              I craft modern web applications with clean code, intuitive design, and cutting-edge technologies.
              Passionate about creating digital experiences that make a difference.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Button size="lg" className="font-medium" asChild>
              <Link href="#projects">
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="font-medium bg-transparent" asChild>
              <Link href="/CV-last.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <p className="text-sm text-muted-foreground mb-8">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "Laravel",
                "MongoDB",
                "Python",
                "MySQL",
                "JavaScript",
                "Bootstrap",
                "Tailwind CSS",
                "Next.js",
                "Vue.js",
                "Docker",
                "AWS",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="px-4 py-2 text-sm font-medium text-foreground bg-card/50 backdrop-blur-sm rounded-full border border-border/50 shadow-sm"
                    animate={{
                      y: [0, -3, 0],
                      rotateX: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3 + (index % 3),
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    {tech}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                <ArrowDown className="h-6 w-6" />
                <span className="sr-only">Scroll to about section</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
