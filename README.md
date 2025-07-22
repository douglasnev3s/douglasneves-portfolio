# Douglas Neves - Professional Portfolio

A minimalist, professional portfolio website inspired by zenorocha.com design principles. Built with Next.js 15, TypeScript, and shadcn/ui.

## Features

- **Minimalist Design**: Dark theme with clean typography and professional presentation
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Blog System**: MDX-powered blog with syntax highlighting and reading time
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags, sitemap, and performance optimization
- **International Ready**: Suitable for international job applications

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Content**: MDX for blog posts
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
douglasneves-portfolio/
├── app/                    # Next.js 15 App Router
│   ├── page.tsx           # Home page
│   ├── stack/page.tsx     # Technologies & Skills
│   ├── projects/page.tsx  # Portfolio projects
│   ├── experience/page.tsx # Professional background
│   ├── blog/              # Blog pages
│   └── contact/page.tsx   # Contact information
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   └── blog/             # Blog-specific components
├── content/blog/         # MDX blog posts
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks

## Design System

### Colors (Dark Theme)
- Background: `#000000` (black)
- Primary text: `#ffffff` (white)
- Secondary text: `#a1a1aa` (gray-400)
- Accent color: `#3b82f6` (blue-500)
- Border color: `#27272a` (zinc-800)
- Card background: `#18181b` (zinc-900)

### Typography
- Titles use blue accent color (`#3b82f6`)
- Primary content uses white text
- Secondary information uses gray text
- Clean, minimal hierarchy

## Content Management

### Adding Blog Posts

Create new MDX files in `content/blog/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
description: "Brief description of your post"
tags: ["Next.js", "React", "TypeScript"]
published: true
---

Your blog content here...
```

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Customization

- Update personal information in the page components
- Modify colors in `app/globals.css` and `tailwind.config.js`
- Add new sections or pages as needed
- Customize the design system variables

## License

This project is open source and available under the MIT License.