import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Douglas Neves - Senior Full-Stack JavaScript Engineer",
    template: "%s | Douglas Neves"
  },
  description: "Senior Full-Stack JavaScript Engineer with 5+ years building scalable B2B SaaS applications and enterprise data systems. Technical leader with proven track record managing data migration projects serving energy companies across Brazil and international teams.",
  keywords: [
    "Douglas Neves",
    "Senior Full-Stack Developer",
    "JavaScript Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "B2B SaaS",
    "Siemens",
    "Suprify"
  ],
  authors: [{ name: "Douglas Ferreira Neves" }],
  creator: "Douglas Ferreira Neves",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://douglasneves.com",
    title: "Douglas Neves - Senior Full-Stack JavaScript Engineer",
    description: "Senior Full-Stack JavaScript Engineer with 5+ years building scalable B2B SaaS applications and enterprise data systems.",
    siteName: "Douglas Neves Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Neves - Senior Full-Stack JavaScript Engineer",
    description: "Senior Full-Stack JavaScript Engineer with 5+ years building scalable B2B SaaS applications and enterprise data systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}