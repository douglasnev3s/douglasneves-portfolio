import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail } from "lucide-react"

const techStack = [
  "Node.js",
  "NestJS",
  "React", 
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "Docker"
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      {/* Hero Section - zenorocha.com inspired */}
      <div className="space-y-8">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Douglas Ferreira Neves
        </h1>
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl text-primary font-medium">
          Senior Full-Stack JavaScript Engineer
        </h2>
        
        {/* Bio */}
        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            Senior Full-Stack JavaScript Engineer with 5+ years building scalable B2B SaaS applications and enterprise data systems. Technical leader with proven track record managing data migration projects serving energy companies across Brazil and international teams.
          </p>
          
          <p>
            Currently developing <span className="text-primary">Suprify</span>, a B2B SaaS platform for printer fleet management, while leading technical teams at <span className="text-primary">Siemens</span> across USA, Germany, and Austria.
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-24 space-y-8">
        <h3 className="text-2xl font-bold text-primary">About</h3>
        
        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            I specialize in building full-stack applications using modern JavaScript technologies, with a focus on scalable architecture and clean code practices. My experience spans from enterprise data systems at Siemens to entrepreneurial ventures in the SaaS space.
          </p>
          
          <p>
            At Siemens, I lead international teams in developing mission-critical energy management systems, while simultaneously building Suprify—a comprehensive printer fleet management platform that serves managed print service providers.
          </p>
          
          <p>
            I'm passionate about creating efficient, maintainable solutions that solve real business problems, whether that's optimizing database performance for energy companies or building intuitive dashboards for fleet management.
          </p>
        </div>
      </div>
    </div>
  )
}