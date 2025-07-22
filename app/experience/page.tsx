import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Career",
  description: "Professional experience and career timeline of Douglas Neves, Senior Full-Stack JavaScript Engineer.",
}

const experiences = [
  {
    title: "Founder & Full-Stack Developer", 
    company: "Suprify",
    location: "Remote",
    period: "Jan 2024 – Present",
    duration: "1 yr 2 mos",
    description: "Building B2B SaaS platform for printer fleet management using Node.js, React, Next.js, and PostgreSQL.",
    current: true
  },
  {
    title: "Senior Software Engineer & Technical Lead",
    company: "Siemens",
    location: "Curitiba, Brazil",
    period: "Mar 2023 – Present",
    duration: "2 yrs 5 mos",
    description: "Leading data migration and system integration for Siemens Spectrum Power 7 across international projects.",
    current: true
  },
  {
    title: "Technical Lead - Data Engineering",
    company: "Siemens", 
    location: "Curitiba, Brazil",
    period: "May 2021 – Mar 2023",
    duration: "1 yr 11 mos",
    description: "Led SCADA and GIS database systems integration for energy companies across USA, Germany, and Austria.",
    current: false
  },
  {
    title: "Software Engineer",
    company: "Siemens",
    location: "Curitiba, Brazil", 
    period: "Jan 2020 – May 2021",
    duration: "1 yr 5 mos",
    description: "Developed desktop applications and automation tools for energy sector digitalization.",
    current: false
  },
  {
    title: "Software Developer",
    company: "Copel Distribuição S.A.",
    location: "Curitiba, Brazil",
    period: "Aug 2016 – Dec 2019", 
    duration: "3 yrs 5 mos",
    description: "Developed enterprise applications and contributed to ADMS system implementation.",
    current: false
  }
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Career
        </h1>
        <p className="text-lg text-muted-foreground">
          My professional journey and experience
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className={exp.current ? "border-primary/20 bg-card" : ""}>
            <CardHeader>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-primary">
                    {exp.title}
                  </CardTitle>
                  {exp.current && (
                    <Badge className="bg-green-600 text-white text-xs">
                      Current
                    </Badge>
                  )}
                </div>
                
                <h4 className="text-lg font-semibold text-foreground">
                  {exp.company}
                </h4>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                    <span className="text-muted-foreground/60">• {exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-foreground leading-relaxed">
                {exp.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-16" />

      {/* Key Achievements */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-primary">
          Key Achievements
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">
                International Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground text-sm leading-relaxed">
                Successfully led cross-functional technical teams across USA, Germany, and Austria, 
                coordinating complex data migration projects for energy companies.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">
                Entrepreneurial Success  
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground text-sm leading-relaxed">
                Founded and developed Suprify, a comprehensive B2B SaaS platform serving 
                managed print service providers with real-time fleet monitoring capabilities.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">
                Enterprise Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground text-sm leading-relaxed">
                Architected and implemented mission-critical energy management systems, 
                handling complex SCADA and GIS database integrations for enterprise clients.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">
                Technical Innovation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground text-sm leading-relaxed">
                Developed automation tools and desktop applications that improved operational 
                efficiency in energy sector digitalization initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-16" />

      {/* Career Stats */}
      <div className="grid gap-6 md:grid-cols-3 text-center">
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary">8+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary">3</div>
          <div className="text-sm text-muted-foreground">Countries Collaborated</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary">2</div>
          <div className="text-sm text-muted-foreground">Current Roles</div>
        </div>
      </div>
    </div>
  )
}