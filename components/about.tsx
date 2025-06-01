import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile"
                    className="rounded-lg w-full max-w-sm mx-auto"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    I'm Alvin Mwaniki, a software developer specializing in Python, Django, and web development. I have
                    a passion for creating efficient and scalable solutions.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    I enjoy tackling challenging projects and continuously learning new technologies to improve my
                    skills. I am dedicated to writing clean, well-documented code and delivering high-quality results.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <h4 className="font-semibold mb-2">Location</h4>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Experience</h4>
                      <p className="text-muted-foreground">7+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
