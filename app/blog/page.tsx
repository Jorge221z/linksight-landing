import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/blog"
import { ArrowRight, Calendar, Clock, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & RF Planning Guides",
  description: "Technical guides, RF calculation formulas, and line of sight best practices for Meshtastic, LoRa, WISP operators, and field engineers.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "LinkSight Blog - RF Planning & Fresnel Zone Guides",
    description: "Technical guides, RF calculation formulas, and line of sight best practices for Meshtastic, LoRa, WISP operators, and field engineers.",
    url: "https://linksightapp.com/blog",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkSight Blog - RF Planning & Fresnel Zone Guides",
    description: "Technical guides, RF calculation formulas, and line of sight best practices for field engineers.",
    images: ["/og-image.jpg"],
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="pt-44 pb-16 px-6">
          <div className="max-w-5xl mx-auto text-left mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 font-serif text-slate-900">
              RF Planning & Field Notes
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Practical guides on microwave link planning, Fresnel zone clearance, and off-grid network deployment.
            </p>
          </div>
        </section>

        {/* Articles List */}
        <section className="pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white p-8 rounded-3xl border border-zinc-200/80 hover:border-blue-500/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-serif font-medium text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`} className="cursor-pointer">
                        {post.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {post.description}
                    </p>
                  </div>

                  {/* Metadata footer */}
                  <div className="pt-6 border-t border-zinc-100 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishDate}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer minimal={true} />
    </main>
  )
}
