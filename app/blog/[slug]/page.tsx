import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { MDXContent } from '@/components/blog/mdx-content'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article header */}
      <header className="mb-12 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </div>
        </div>

        {post.description && (
          <p className="text-xl text-muted-foreground">
            {post.description}
          </p>
        )}

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <Separator className="mb-12" />

      {/* Article content */}
      <article className="prose prose-invert max-w-none">
        <MDXContent source={post.content} />
      </article>

      <Separator className="my-12" />

      {/* Footer */}
      <footer className="text-center space-y-4">
        <p className="text-muted-foreground">
          Thanks for reading! If you enjoyed this article, feel free to share it.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </footer>
    </div>
  )
}