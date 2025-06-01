import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Acme Corp",
      period: "2023 - Present",
      description:
        "Leading the development of scalable backend systems using Python and Django. Responsible for designing and implementing RESTful APIs and improving system performance.",
      technologies: ["Python", "Django", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "Software Engineer",
      company: "Beta Industries",
      period: "2021 - 2023",
      description:
        "Developed and maintained web applications using React and Node.js. Implemented unit and integration tests to ensure code quality.",
      technologies: ["React", "Node.js", "JavaScript", "TypeScript", "Jest"],
    },
    {
      title: "Backend Developer",
      company: "Gamma Solutions",
      period: "2019 - 2021",
      description:
        "Built and maintained RESTful APIs using Python and Flask. Worked with relational databases such as MySQL and PostgreSQL.",
      technologies: ["Python", "Flask", "MySQL", "PostgreSQL", "REST APIs"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
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
    </section>
  )
}
