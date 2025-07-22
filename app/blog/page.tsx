import { Metadata } from "next"
import { getAllPosts } from "@/lib/mdx"
import { BlogCard } from "@/components/blog/blog-card"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights about web development, JavaScript, and technology by Douglas Neves.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Articles and insights about web development, JavaScript, and technology
        </p>
      </div>

      {/* Blog Posts */}
      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Coming Soon
          </h2>
          <p className="text-muted-foreground">
            I'm working on some exciting blog posts. Check back soon for insights on 
            web development, JavaScript, and the latest in technology.
          </p>
        </div>
      )}
    </div>
  )
}