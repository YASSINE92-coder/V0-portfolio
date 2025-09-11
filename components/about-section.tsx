import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Users } from "lucide-react"

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
    technologies: ["Docker", "GitHub", "Git", "SonarQube" ],
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

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a passionate jenior full-stack developer with 1 year of experience building modern web applications. I
            love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                   If a task can be automated, why do it manually? 
                  </p>
                  <p>
                    As a Full-Stack Development expert, I specialize in web automation to create tailored tools.
                    Whether it’s speeding up your processes, extracting and analyzing data, or developing dynamic web solutions,
                    my goal is clear: to simplify your daily work and boost your productivity with smart solutions tailored to your needs.
                  </p>
                 
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <Card key={highlight.title} className="hover:shadow-md transition-shadow">
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
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4 text-primary">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
