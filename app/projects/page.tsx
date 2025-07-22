import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured projects and work by Douglas Neves, including Suprify B2B SaaS platform and enterprise solutions.",
}

const featuredProject = {
  title: "Suprify",
  subtitle: "B2B Printer Fleet Management SaaS",
  description: "Comprehensive B2B SaaS solution enabling managed print service providers to monitor and optimize their clients' printer fleets through real-time data collection and cloud-based analytics.",
  features: [
    "Multi-tenant SaaS architecture",
    "Real-time printer monitoring via SNMP protocol",
    "Desktop client built with Electron", 
    "Stripe billing integration",
    "PostgreSQL database with Prisma ORM",
    "Responsive web dashboard"
  ],
  technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "Electron", "Docker", "React", "TypeScript"],
  status: "Live Demo Available",
  liveUrl: "https://suprify.com.br",
  githubUrl: "https://github.com/Suprify"
}

const otherProjects = [
  {
    title: "Siemens Spectrum Power 7",
    description: "Leading data migration and system integration for energy management systems across international projects in USA, Germany, and Austria.",
    technologies: ["C++", "Oracle", "PL/SQL", "Data Migration"],
    type: "Enterprise System"
  },
  {
    title: "SCADA Integration Platform",
    description: "Developed SCADA and GIS database systems integration for energy companies, focusing on real-time monitoring and control systems.",
    technologies: ["Node.js", "PostgreSQL", "Real-time Systems", "GIS"],
    type: "Enterprise Solution"
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground">
          Featured work and projects I've built
        </p>
      </div>

      {/* Featured Project */}
      <div className="mb-16">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl text-primary">
                  {featuredProject.title}
                </CardTitle>
                <p className="text-lg font-medium text-muted-foreground">
                  {featuredProject.subtitle}
                </p>
                <Badge variant="default" className="w-fit">
                  {featuredProject.status}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground leading-relaxed">
              {featuredProject.description}
            </p>
            
            {/* Key Features */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {featuredProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild>
                <Link href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="mb-16" />

      {/* Other Projects */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-primary">
          Enterprise Work
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-lg text-primary">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {project.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
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

      <Separator className="my-16" />

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-primary">
          Interested in Working Together?
        </h2>
        <p className="text-muted-foreground">
          I'm always open to discussing new projects and opportunities.
        </p>
        <Button asChild>
          <Link href="/contact">
            Get in Touch
          </Link>
        </Button>
      </div>
    </div>
  )
}