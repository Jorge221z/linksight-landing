"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Header />

        <div className="max-w-3xl mx-auto px-6 pt-44 pb-24">
          <div className="text-left mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors group cursor-pointer">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-normal font-serif text-slate-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 mb-12">Effective Date: July 1, 2026</p>
          
          <div className="text-slate-600 space-y-8 text-sm md:text-base leading-relaxed">
            <p>
              This Privacy Policy explains how LinkSight (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and discloses your information when you use our mobile application and the <a href="https://linksightapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linksightapp.com</a> website (collectively, the &quot;Service&quot;).
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">1. Information We Collect</h2>
              <p>We only collect the information strictly necessary to provide and improve our Service.</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-slate-800">Personal Information:</strong> When you use our Service or create an account, we may collect your email address. We do not collect or request your name, phone number, or physical address.
                </li>
                <li>
                  <strong className="text-slate-800">Payment Information:</strong> For in-app purchases and subscriptions, all transactions are processed securely through Google Play Billing. We use <strong className="text-slate-800">RevenueCat</strong> to manage mobile subscription status and verify purchases. We do not collect, process, or store your credit card or billing details on our servers.
                </li>
                <li>
                  <strong className="text-slate-800">Location Data:</strong> LinkSight requires access to your device&apos;s location services (GPS) to center the topographic map and accurately calculate line of sight (LOS) and Fresnel zones. This data is processed in real-time on your device. We do not track your location in the background or store your location history.
                </li>
                <li>
                  <strong className="text-slate-800">Usage and Device Data:</strong> We collect diagnostic data, such as device model, operating system version, and crash reports.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">2. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve the LinkSight application.</li>
                <li>To manage your account and enforce our daily calculation limits (Freemium model).</li>
                <li>To analyze app stability and fix crashes.</li>
              </ul>
              <p className="italic bg-zinc-50 border border-zinc-200/60 rounded-2xl p-6 text-slate-500 text-sm">
                Note: We DO NOT sell your data, we DO NOT display third-party advertisements, and we DO NOT send unsolicited marketing emails.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">3. Third-Party Services</h2>
              <p>We use third-party services that may collect information used to identify you. These include:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-slate-800">Google Play Services &amp; Google Play Billing:</strong> For secure app distribution and secure transaction processing.
                </li>
                <li>
                  <strong className="text-slate-800">RevenueCat:</strong> For tracking mobile subscription status, unlocking PRO features in-app, and managing purchase receipts.
                </li>
                <li>
                  <strong className="text-slate-800">Google Maps API / Mapbox:</strong> For rendering high-quality topographic maps, terrain graphics, and address geocoding.
                </li>
                <li>
                  <strong className="text-slate-800">Firebase Crashlytics:</strong> For real-time crash reporting and application stability tracking.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">4. Data Retention and Deletion (Your Rights)</h2>
              <p>
                You have the right to request the deletion of your personal data at any time. You can request account and data deletion directly within the LinkSight app settings or by contacting us at <a href="mailto:jorgemunoz.labs@gmail.com" className="text-blue-600 hover:underline">jorgemunoz.labs@gmail.com</a>. Once requested, your email address and associated data will be permanently deleted from our databases.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">5. GDPR, CCPA, and CalOPPA Compliance</h2>
              <p>
                Depending on your location (such as the European Economic Area or California), you have the right to access, update, or delete the information we have on you. You also have the right to restrict processing and request data portability. To exercise these rights, please contact us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:jorgemunoz.labs@gmail.com" className="text-blue-600 hover:underline">
                  jorgemunoz.labs@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer minimal={true} />
    </main>
  )
}
