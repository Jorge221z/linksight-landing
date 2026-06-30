"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400 mb-12">Effective Date: July 1, 2026</p>
          
          <div className="text-slate-600 space-y-8 text-sm md:text-base leading-relaxed">
            <p>
              Please read these Terms of Service (&quot;Terms&quot;) carefully before using the LinkSight mobile application operated by LinkSight.
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">2. Description of Service</h2>
              <p>
                LinkSight is a topographic and radio frequency (RF) planning tool. It allows users to calculate line of sight (LOS) and Fresnel zones.
              </p>
              <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 text-slate-600 space-y-3">
                <p className="font-semibold text-slate-900 text-sm">Disclaimer &amp; Limitation of Liability:</p>
                <p className="text-xs md:text-sm leading-relaxed">
                  The data and topographic profiles provided by LinkSight (including SRTM90m elevation data) are for planning and estimation purposes only. Users must verify all calculations with on-site field surveys before deploying real-world hardware or infrastructure. We are not liable for hardware damage, network failure, or financial loss resulting from reliance on the application&apos;s estimations.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">3. Subscriptions and Payments (LinkSight PRO)</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  LinkSight offers a Freemium model. Users are granted a limited number of free calculations per day.
                </li>
                <li>
                  Users may upgrade to &quot;LinkSight PRO&quot; via an auto-renewing subscription (e.g., €3.69/month) to unlock unlimited calculations and PDF reports.
                </li>
                <li>
                  All payments, subscriptions, and transaction verifications are securely handled by Google Play Billing and managed via RevenueCat. We do not store or process your credit card information on our servers.
                </li>
                <li>
                  You can cancel your subscription at any time through your Google Play Account settings. Cancellations apply to the following billing cycle.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">4. User Accounts</h2>
              <p>
                If you create an account using your email address, you are responsible for safeguarding your credentials. We reserve the right to terminate accounts that abuse the Service, attempt to bypass the daily calculation limits artificially, or violate these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">5. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of LinkSight. The app is protected by copyright and trademark laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">7. Contact Us</h2>
              <p>
                For any questions regarding these Terms, please contact us at:{" "}
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
