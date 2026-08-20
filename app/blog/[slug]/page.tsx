import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { BlogStructuredData } from "@/components/blog-structured-data"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | LinkSight",
    }
  }

  const baseUrl = "https://linksightapp.com"
  const url = `${baseUrl}/blog/${slug}`
  const ogImageUrl = post.ogImage?.startsWith("http") ? post.ogImage : `${baseUrl}${post.ogImage || "/og-image.jpg"}`

  return {
    title: `${post.title} | LinkSight Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author || "Jorge Muñoz Castillo", url: "https://jorgemunoz.pro" }],
    creator: post.author || "Jorge Muñoz Castillo",
    publisher: "LinkSight",
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author || "Jorge Muñoz Castillo"],
      tags: post.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <BlogStructuredData post={post} />

      <div>
        <Header />

        <article className="pt-44 pb-24 px-6 max-w-4xl mx-auto">
          {/* Top navigation & Breadcrumb */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all guides</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-slate-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-slate-600">Blog</Link>
              <span>/</span>
              <span className="text-slate-600 truncate max-w-[200px]">{post.title}</span>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-12 pb-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-normal font-serif text-slate-900 leading-tight tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Description Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
              {post.description}
            </p>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500 pt-2">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-slate-400" />
                  <span>
                    By{" "}
                    <a
                      href="https://jorgemunoz.pro/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
                    >
                      {post.author || "Jorge Muñoz Castillo"}
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{post.publishDate}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content Body */}
          <div
            className="blog-content mb-16"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        </article>
      </div>

      <Footer minimal={true} />
    </main>
  )
}
