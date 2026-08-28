import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Mail, ShieldAlert, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Account Deletion Request - LinkSight",
  description: "Request deletion of your LinkSight account and all associated data in compliance with Google Play Data Safety requirements.",
  alternates: {
    canonical: "/account-deletion",
  },
  openGraph: {
    title: "Account Deletion Request - LinkSight",
    description: "Request deletion of your LinkSight account and all associated data.",
    url: "https://linksightapp.com/account-deletion",
    images: ["/og-image.jpg"],
  },
}

export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Header />

        <div className="max-w-3xl mx-auto px-6 pt-44 pb-24">
          <div className="text-left mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-normal font-serif text-slate-900 mb-4">
            Account Deletion Request
          </h1>
          <p className="text-sm text-slate-400 mb-10">
            Last Updated: August 2026 • Google Play Data Safety Compliance
          </p>

          <div className="text-slate-600 space-y-10 text-sm md:text-base leading-relaxed">
            <p>
              At LinkSight, we value your privacy and provide full control over your personal information. In accordance with Google Play&apos;s User Data policy, you can request the permanent deletion of your account and all associated data at any time.
            </p>

            {/* Email Deletion Request */}
            <section className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  How to Request Account &amp; Data Deletion
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To request the permanent deletion of your account, send an email to{" "}
                <a
                  href="mailto:jorgemunoz.labs@gmail.com?subject=Account%20Deletion%20Request"
                  className="text-blue-600 font-medium hover:underline"
                >
                  jorgemunoz.labs@gmail.com
                </a>{" "}
                with the subject line <strong className="text-slate-800">&apos;Account Deletion Request&apos;</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Please make sure to send the email from the address associated with your LinkSight account so we can verify account ownership.
              </p>
            </section>

            {/* Scope of Deletion & Retention Policy */}
            <section className="space-y-4 pt-2">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-slate-700" />
                <h2 className="text-xl font-semibold text-slate-900">
                  Data Scope &amp; Retention Details
                </h2>
              </div>
              <ul className="space-y-3 pl-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-800">What data is deleted:</strong> Your account identifier (email address), authentication credentials, calculation quota logs, saved preferences, and temporary session tokens.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-800">Processing timeframe:</strong> Account deletion requests are verified and permanently processed within 5 business days of receiving your email.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-800">Permanent removal:</strong> Once deleted, this action is irreversible and your account records cannot be restored.
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer minimal={true} />
    </main>
  )
}
