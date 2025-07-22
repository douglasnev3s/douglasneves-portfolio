import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Clock, Github, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Douglas Neves. Available for remote full-stack development opportunities, technical leadership roles, and international projects.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      {/* Header */}
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'hsl(27, 96%, 61%)' }}>
          Contact
        </h1>
        <p className="text-lg text-muted-foreground">
          Let&apos;s work together on your next project.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Details */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                <Mail className="h-5 w-5 text-white" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:douglas.neves@gmail.com"
                className="text-foreground hover:text-white transition-colors"
              >
                douglas.neves@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                <MapPin className="h-5 w-5 text-white" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">Londrina, Paraná, Brazil</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                <Clock className="h-5 w-5 text-white" />
                Timezone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">GMT-3 (flexible for international collaboration)</p>
            </CardContent>
          </Card>
        </div>

        {/* Availability */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-white">
                Current Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-foreground font-medium">Available for new opportunities</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Available for remote full-stack development opportunities, technical leadership roles, and international projects.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-white">
                What I Can Help With
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Full-stack JavaScript development</li>
                <li>• B2B SaaS architecture and development</li>
                <li>• Technical leadership and team management</li>
                <li>• Database design and optimization</li>
                <li>• International project coordination</li>
                <li>• Code reviews and technical consulting</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-16 text-center space-y-6">
        <h2 className="text-2xl font-bold text-white">Connect With Me</h2>
        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/douglasnev3s"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://linkedin.com/in/douglasneves"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="mailto:douglas.neves@gmail.com" className="gap-2">
              <Mail className="h-4 w-4" />
              Send Email
            </a>
          </Button>
        </div>
      </div>

      {/* Response Time */}
      <div className="mt-16 text-center">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              I typically respond to emails within <span className="text-white font-medium">24 hours</span>.
              For urgent inquiries, feel free to mention it in the subject line.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}