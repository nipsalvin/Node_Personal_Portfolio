const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3000

// Set view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Static files
app.use(express.static(path.join(__dirname, "public")))

// Body parser middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  const portfolioData = {
    name: "Alvin Mwaniki",
    title: "Python/Django Developer",
    description: "I specialize in web development and data visualization, building robust and scalable applications.",
    location: "Nairobi, Kenya",
    experience: "7+ Years",
    email: "alvin.mwaniki@example.com",
    phone: "+254 123 456 789",

    skills: {
      frontend: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      backend: ["Python", "Django", "Flask", "Node.js", "Express.js", "APIs", "Selenium"],
      database: ["PostgreSQL", "MySQL", "Git", "GitHub", "Beautiful Soup", "Matplotlib", "Plotly"],
    },

    projects: [
      {
        title: "Django E-commerce API",
        description:
          "A RESTful API built with Django REST Framework for an e-commerce platform. Includes user authentication, product management, and order processing.",
        technologies: ["Python", "Django", "DRF", "PostgreSQL"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: "/images/project1.jpg",
      },
      {
        title: "Web Scraper with Beautiful Soup",
        description:
          "A Python script that scrapes data from websites using Beautiful Soup and requests. Data is cleaned and stored in a CSV file.",
        technologies: ["Python", "Beautiful Soup", "Requests", "CSV"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: "/images/project2.jpg",
      },
      {
        title: "Data Visualization Dashboard",
        description:
          "A dashboard created with Flask and Plotly to visualize data from various sources. Interactive charts and graphs provide insights into key metrics.",
        technologies: ["Python", "Flask", "Plotly", "HTML/CSS"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: "/images/project3.jpg",
      },
    ],

    experience: [
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
    ],
  }

  res.render("index", { data: portfolioData })
})

// Contact form submission
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body

  // Here you would typically save to database or send email
  console.log("Contact form submission:", { name, email, message })

  res.json({ success: true, message: "Thank you for your message! I will get back to you soon." })
})

// API endpoint for theme toggle
app.post("/api/theme", (req, res) => {
  const { theme } = req.body
  // Store theme preference (could be in session, database, etc.)
  res.json({ success: true, theme })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
