import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const blogDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  publishDate: string
  tags: string[]
  author?: string
  ogImage?: string
  readTime: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
  htmlContent: string
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/g).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "")
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        publishDate: data.publishDate || new Date().toISOString().split("T")[0],
        tags: Array.isArray(data.tags) ? data.tags : [],
        author: data.author || "Jorge Muñoz Castillo",
        ogImage: data.ogImage || "/og-image.jpg",
        readTime: calculateReadingTime(content),
      }
    })

  return allPostsData.sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const mdPath = path.join(blogDirectory, `${slug}.md`)
  const mdxPath = path.join(blogDirectory, `${slug}.mdx`)

  const targetPath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null

  if (!targetPath) {
    return null
  }

  const fileContents = fs.readFileSync(targetPath, "utf8")
  const { data, content } = matter(fileContents)

  // Configure marked for clean heading IDs and links
  const htmlContent = await marked.parse(content)

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    publishDate: data.publishDate || new Date().toISOString().split("T")[0],
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: data.author || "Jorge Muñoz Castillo",
    ogImage: data.ogImage || "/og-image.jpg",
    readTime: calculateReadingTime(content),
    content,
    htmlContent,
  }
}
