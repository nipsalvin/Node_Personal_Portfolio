import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Django E-commerce API",
      description:
        "A RESTful API built with Django REST Framework for an e-commerce platform. Includes user authentication, product management, and order processing.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Django", "DRF", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Web Scraper with Beautiful Soup",
      description:
        "A Python script that scrapes data from websites using Beautiful Soup and requests. Data is cleaned and stored in a CSV file.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Beautiful Soup", "Requests", "CSV"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "A dashboard created with Flask and Plotly to visualize data from various sources. Interactive charts and graphs provide insights into key metrics.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Flask", "Plotly", "HTML/CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
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
