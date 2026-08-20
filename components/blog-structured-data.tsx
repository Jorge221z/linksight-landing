import { BlogPost } from "@/lib/blog"

interface BlogStructuredDataProps {
  post: BlogPost
}

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const baseUrl = "https://linksightapp.com"
  const postUrl = `${baseUrl}/blog/${post.slug}`
  const imageUrl = post.ogImage?.startsWith("http") ? post.ogImage : `${baseUrl}${post.ogImage || "/og-image.jpg"}`

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${postUrl}/#article`,
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "name": "LinkSight",
          "url": baseUrl
        },
        "headline": post.title,
        "description": post.description,
        "url": postUrl,
        "mainEntityOfPage": postUrl,
        "datePublished": post.publishDate,
        "dateModified": post.publishDate,
        "inLanguage": "en-US",
        "image": imageUrl,
        "keywords": post.tags.join(", "),
        "articleSection": "RF Engineering & Mobile Link Planning",
        "author": {
          "@type": "Person",
          "@id": "https://jorgemunoz.pro/#person",
          "name": "Jorge Muñoz Castillo",
          "url": "https://jorgemunoz.pro"
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "LinkSight",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/ic_logo_playstore.png`
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${postUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${baseUrl}/blog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": postUrl
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
