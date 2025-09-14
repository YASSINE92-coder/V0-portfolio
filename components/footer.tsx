"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <Link href="#home" className="font-heading font-bold text-2xl text-primary">
              YC
            </Link>
            <p className="text-muted-foreground text-sm text-pretty">
              Full Stack Developer passionate about creating modern web applications and digital experiences that make a
              difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Projects
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com/YASSINE92-coder" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://www.linkedin.com/in/yassine-chaanoune" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="mailto:yassinechaanoune039@email.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
            <p className="text-muted-foreground text-sm">
              Available for freelance projects and full-time opportunities.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Yassine Chaanoune. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
