export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jorgemunoz.pro/#person",
        "name": "Jorge Muñoz Castillo",
        "jobTitle": "Full Stack & Mobile Developer",
        "url": "https://jorgemunoz.pro",
        "sameAs": [
          "https://github.com/Jorge221z",
          "https://www.linkedin.com/in/jorge-muñoz-castillo",
          "https://linksightapp.com"
        ]
      },
      {
        "@type": "MobileApplication",
        "@id": "https://linksightapp.com/#app",
        "name": "LinkSight",
        "operatingSystem": "Android",
        "applicationCategory": "UtilitiesApplication",
        "description": "Plan point-to-point microwave links and calculate Fresnel zones instantly from your phone. Built for field engineers.",
        "url": "https://linksightapp.com",
        "installUrl": "https://play.google.com/store/apps/details?id=com.linksight.app",
        "image": "https://linksightapp.com/og-image.jpg",
        "screenshot": "https://linksightapp.com/calc_graph.png",
        "softwareVersion": "1.0",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        },
        "author": {
          "@id": "https://jorgemunoz.pro/#person"
        },
        "creator": {
          "@id": "https://jorgemunoz.pro/#person"
        },
        "featureList": [
          "Instant Point-to-Point Line of Sight (LOS) calculation",
          "Elevation Profile using SRTM90m global topography",
          "Fresnel Zone clearance analysis for 2.4GHz, 5.8GHz and Sub-GHz",
          "Professional PDF feasibility study export",
          "Custom antenna mast heights and frequency adjustment"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://linksightapp.com/#website",
        "name": "LinkSight",
        "url": "https://linksightapp.com",
        "description": "Precision RF planning, right in your pocket. Point-to-point microwave link planning and Fresnel zone calculator.",
        "publisher": {
          "@id": "https://jorgemunoz.pro/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "FAQPage",
        "@id": "https://linksightapp.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is it really free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! You get 5 free calculations every single day, for life. No credit card required. Perfect for hobbyists, drone pilots, and casual planning."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in LinkSight Pro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LinkSight Pro includes unlimited daily calculations, the ability to generate and export professional PDF feasibility reports with your company logo, and priority support."
            }
          },
          {
            "@type": "Question",
            "name": "Where does the elevation data come from?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use the SRTM90m (Shuttle Radar Topography Mission) global database, which provides reliable and consistent 90-meter resolution topographic data for almost anywhere on Earth."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need an internet connection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The app downloads the specific elevation profile for your selected path in milliseconds from our high-speed servers, meaning you don't need to store gigabytes of maps on your phone."
            }
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
