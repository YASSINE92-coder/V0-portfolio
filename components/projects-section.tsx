import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/YASSINE92-coder/ecommerce-platform",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application built with Next.js and real-time updates. Includes team collaboration, project tracking, and deadline management.",
    image: "/task-management-app.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/YASSINE92-coder/task-manager",
    featured: true,
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "A data visualization dashboard that displays weather patterns and analytics using Chart.js and external APIs. Features interactive charts and location-based forecasts.",
    image: "/weather-analytics-dashboard-charts.jpg",
    technologies: ["Vue.js", "Chart.js", "Express", "MongoDB", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/YASSINE92-coder/weather-dashboard",
    featured: false,
  },
  {
    title: "Social Media API",
    description:
      "RESTful API for a social media platform with user authentication, post management, real-time messaging, and content moderation features.",
    image: "/api-documentation-interface.jpg",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "https://api-docs.example.com",
    githubUrl: "https://github.com/YASSINE92-coder/social-api",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with modern web technologies. Features smooth animations, dark mode support, and optimized performance.",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://yassine-portfolio.com",
    githubUrl: "https://github.com/YASSINE92-coder/portfolio",
    featured: false,
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by AI with natural language processing, context awareness, and multi-language support.",
    image: "/ai-chat-interface.png",
    technologies: ["React", "Python", "OpenAI API", "WebSocket", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/YASSINE92-coder/ai-chat",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
            modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="font-heading text-2xl mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-pretty">{project.description}</p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
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
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="font-heading font-semibold text-2xl mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
