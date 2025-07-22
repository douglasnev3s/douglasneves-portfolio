import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://douglasneves.com'
  
  const staticRoutes = [
    '',
    '/stack',
    '/projects',
    '/experience',
    // '/blog', // Commented out to exclude from SEO
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Commented out blog routes to exclude from SEO
  // const posts = getAllPosts()
  // const blogRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.date),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [...staticRoutes]
}