"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Hotel management system",
    description:
      "Features include user inscription, authentication, filtering suites , adding comments , booking management, room inventory, and admin dashboard.",
    image: "/hotel-cover.png",
    images: [
      "/hotel-cover.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["JavaScript", "Laravel", "MySQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/YASSINE92-coder/ecommerce-platform",
    featured: true,
  },
  {
    title: "Product Management App",
    description: " MVC architecture , deadline management and data manipulation.",
    image: "/productmanager-cover.png",
    images: [
      "/productmanager-cover.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["Express", "MongoDB", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/YASSINE92-coder/task-manager",
    featured: true,
  },
  {
    title: "Movies App",
    description:
      "A backend service for a movies application that provides movie data and recommendations using chatboot integration.",
    image: "/movieapp.png",
    images: [
      "/movieapp.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["Vue.js", "Chart.js", "Express", "MongoDB", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/YASSINE92-coder/weather-dashboard",
    featured: false,
  },
  {
    title: "Weather App - backend",
    description:
      "A backend service for a weather application that provides real-time weather data and forecasts using external APIs.",
    image: "https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png?rf=1024",
    images: [
      "https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png?rf=1024",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["node.js", "Express", "OpenWeather API"],
    liveUrl: "https://api-docs.example.com",
    githubUrl: "https://github.com/YASSINE92-coder/social-api",
    featured: false,
  },
  {
    title: "Interior Design",
    description:
      "A responsive interior design website built with modern web frameworks and technologies. Features smooth animations, dark mode support, and optimized performance.",
    image: "/nomahd.png",
    images: [
      "/nomahd.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["HTML", "JavaScript", "Bootstrap"],
    liveUrl: "https://yassine-portfolio.com",
    githubUrl: "https://github.com/YASSINE92-coder/portfolio",
    featured: false,
  },
]

function ProjectModal({ project }: { project: (typeof projects)[0] }) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-heading text-2xl">{project.title}</DialogTitle>
      </DialogHeader>

      <div className="space-y-6">
        {/* Image Carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Project Details */}
        <div className="space-y-4">
          <p className="text-muted-foreground text-pretty leading-relaxed">{project.description}</p>

          <div className="space-y-3">
            <h4 className="font-semibold">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
            modern web technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <motion.div
                    className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative cursor-pointer group">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-64 lg:h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                              <Eye className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <ProjectModal project={project} />
                    </Dialog>
                  </motion.div>
                  <motion.div
                    className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="font-heading text-2xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-pretty">{project.description}</p>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 + techIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Button size="sm" asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              Details
                            </Button>
                          </DialogTrigger>
                          <ProjectModal project={project} />
                        </Dialog>
                      </motion.div>
                    </CardContent>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <div>
          <motion.h3
            className="font-heading font-semibold text-2xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Other Projects
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={gridItemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="relative">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative cursor-pointer group">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <Eye className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <ProjectModal project={project} />
                    </Dialog>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading text-lg">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
