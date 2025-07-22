import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/douglasnev3s"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/douglasneves"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:douglas.neves@gmail.com"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Douglas Neves. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}