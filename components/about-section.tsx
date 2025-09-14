"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Express", "RESTFUL API", "MySQL", "MongoDB"],
  },
  {
    category: "DevOps & Tools",
    technologies: ["Docker", "GitHub", "Git", "SonarQube"],
  },
  {
    category: "Design & UX",
    technologies: ["Figma", "Canva", "Responsive Design", "Accessibility", "User Research"],
  },
]

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code following best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with attention to detail.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, efficiency, and excellent user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams using agile methodologies and modern workflows.",
  },
]

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

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a passionate jenior full-stack developer with 1 year of experience building modern web applications. I
            love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>If a task can be automated, why do it manually?</p>
                  <p>
                    As a Full-Stack Development expert, I specialize in web automation to create tailored tools. Whether
                    it's speeding up your processes, extracting and analyzing data, or developing dynamic web solutions,
                    my goal is clear: to simplify your daily work and boost your productivity with smart solutions
                    tailored to your needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {highlights.map((highlight, index) => (
                <motion.div key={highlight.title} variants={itemVariants}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <highlight.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{highlight.title}</h4>
                          <p className="text-xs text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-heading font-semibold text-xl">Technical Skills</h3>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills.map((skillGroup, index) => (
                <motion.div key={skillGroup.category} variants={itemVariants}>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4 text-primary">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
