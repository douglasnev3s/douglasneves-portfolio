import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Technologies",
  description: "Technologies and tools I work with as a Senior Full-Stack JavaScript Engineer.",
}

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Electron", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Express", "RESTful APIs", "JavaScript (ES6+)", "Python", "C++", "PL/SQL"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Prisma ORM", "Oracle", "MySQL", "Database Design"]
  },
  {
    category: "Cloud & DevOps", 
    skills: ["Vercel", "DigitalOcean", "Render", "Docker", "Git", "GitLab CI/CD"]
  },
  {
    category: "Tools & Methodologies",
    skills: ["Jira", "Agile/Scrum", "Code Reviews", "Technical Leadership", "Cross-functional Teams"]
  },
  {
    category: "AIs & Development Tools",
    skills: ["Copilot", "Claude Code", "ChatGPT"]
  }
]

const currentlyLearning = ["Redux", "MongoDB", "AWS", "LangChain", "AI/ML Integration", "MCP servers"]

export default function StackPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Technologies
        </h1>
        <p className="text-lg text-muted-foreground">
          Tools and technologies I use to build modern applications
        </p>
      </div>

      {/* Technologies Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((category) => (
          <Card key={category.category}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-primary">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-16" />

      {/* Currently Learning Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">
          Currently Learning
        </h2>
        <p className="text-muted-foreground">
          Technologies I&apos;m actively exploring to expand my skill set
        </p>
        <div className="flex flex-wrap gap-2">
          {currentlyLearning.map((tech) => (
            <Badge key={tech} className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="my-16" />

      {/* Philosophy Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">
          Development Philosophy
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            I believe in choosing the right tool for the job rather than following trends. 
            My technology choices are driven by project requirements, team expertise, 
            and long-term maintainability.
          </p>
          <p>
            Whether it&apos;s architecting scalable backend systems with Node.js and PostgreSQL, 
            or creating responsive frontends with React and TypeScript, I focus on 
            writing clean, tested, and documented code that teams can build upon.
          </p>
          <p>
            My experience leading international teams has taught me the importance of 
            clear technical communication and establishing development standards that 
            work across different time zones and cultures.
          </p>
        </div>
      </div>
    </div>
  )
}