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
    description:
      "I specialize in web development and data visualization, building robust and scalable applications with Python, Django, and modern web technologies.",
    location: "Nairobi, Kenya",
    experience: "7+ Years",
    email: "alvin.mwaniki@example.com",
    phone: "+254 123 456 789",
    github: "https://github.com/nipsalvin",
    linkedin: "https://linkedin.com/in/alvin-mwaniki",

    skills: {
      frontend: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      backend: ["Python", "Django", "Flask", "Node.js", "Express.js", "APIs", "Selenium"],
      database: ["PostgreSQL", "MySQL", "Git", "GitHub", "Beautiful Soup", "Matplotlib", "Plotly"],
    },

    projects: [
      {
        title: "Django E-commerce API",
        description:
          "A comprehensive RESTful API built with Django REST Framework for an e-commerce platform. Features include user authentication, product management, order processing, and payment integration.",
        technologies: ["Python", "Django", "DRF", "PostgreSQL", "Redis"],
        github: "https://github.com/nipsalvin/django-ecommerce-api",
        demo: "https://django-ecommerce-demo.herokuapp.com",
        image: "/images/django-ecommerce.jpg",
      },
      {
        title: "Web Scraper with Beautiful Soup",
        description:
          "An intelligent web scraping tool that extracts data from multiple websites using Beautiful Soup and requests. Includes data cleaning, validation, and export to various formats.",
        technologies: ["Python", "Beautiful Soup", "Requests", "Pandas", "CSV"],
        github: "https://github.com/nipsalvin/web-scraper",
        demo: "https://web-scraper-demo.herokuapp.com",
        image: "/images/web-scraper.jpg",
      },
      {
        title: "Data Visualization Dashboard",
        description:
          "An interactive dashboard built with Flask and Plotly for visualizing complex datasets. Features real-time data updates, multiple chart types, and export capabilities.",
        technologies: ["Python", "Flask", "Plotly", "Pandas", "SQLAlchemy"],
        github: "https://github.com/nipsalvin/data-dashboard",
        demo: "https://data-viz-dashboard.herokuapp.com",
        image: "/images/data-dashboard.jpg",
      },
      {
        title: "Automated Testing Suite",
        description:
          "A comprehensive testing framework using Selenium for automated web application testing. Includes cross-browser testing, reporting, and CI/CD integration.",
        technologies: ["Python", "Selenium", "Pytest", "Docker", "Jenkins"],
        github: "https://github.com/nipsalvin/selenium-testing",
        demo: "https://testing-suite-demo.herokuapp.com",
        image: "/images/testing-suite.jpg",
      },
    ],

    experience: [
      {
        title: "Senior Python Developer",
        company: "TechCorp Kenya",
        period: "2023 - Present",
        description:
          "Leading the development of scalable backend systems using Python and Django. Responsible for designing and implementing RESTful APIs, database optimization, and improving system performance by 40%.",
        technologies: ["Python", "Django", "PostgreSQL", "AWS", "Docker", "Redis"],
      },
      {
        title: "Full Stack Developer",
        company: "Digital Solutions Ltd",
        period: "2021 - 2023",
        description:
          "Developed and maintained web applications using Django and React. Implemented automated testing pipelines and reduced deployment time by 60% through CI/CD optimization.",
        technologies: ["Python", "Django", "React", "PostgreSQL", "Docker", "Jenkins"],
      },
      {
        title: "Backend Developer",
        company: "StartupHub Nairobi",
        period: "2019 - 2021",
        description:
          "Built and maintained RESTful APIs using Python and Flask. Worked extensively with data scraping, processing, and visualization using Beautiful Soup and Matplotlib.",
        technologies: ["Python", "Flask", "MySQL", "Beautiful Soup", "Matplotlib", "REST APIs"],
      },
      {
        title: "Junior Developer",
        company: "CodeCraft Solutions",
        period: "2017 - 2019",
        description:
          "Started career developing web applications and learning Python. Gained experience in database design, API development, and automated testing with Selenium.",
        technologies: ["Python", "HTML/CSS", "JavaScript", "MySQL", "Selenium"],
      },
    ],
  }

  res.render("index", { data: portfolioData })
})

// Contact form submission
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    })
  }

  // Here you would typically save to database or send email
  console.log("Contact form submission:", {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  })

  res.json({
    success: true,
    message: "Thank you for your message! I will get back to you soon.",
  })
})

// API endpoint for theme toggle
app.post("/api/theme", (req, res) => {
  const { theme } = req.body
  // Store theme preference (could be in session, database, etc.)
  res.json({ success: true, theme })
})

// 404 handler
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Page Not Found",
    message: "The page you're looking for doesn't exist.",
  })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).render("500", {
    title: "Server Error",
    message: "Something went wrong on our end.",
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📱 Local: http://localhost:${PORT}`)
})
