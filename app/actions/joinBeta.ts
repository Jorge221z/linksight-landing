"use server"

import { z } from "zod"

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

type ActionResult =
  | { success: true }
  | { error: string }

export async function submitToBeta(email: string): Promise<ActionResult> {
  // 1. Validate with Zod
  const parsed = emailSchema.safeParse({ email })

  if (!parsed.success) {
    return { error: "Invalid email" }
  }

  const validEmail = parsed.data.email

  // Check env variable
  if (!process.env.WEB3FORMS_ACCESS_KEY) {
    console.error("WEB3FORMS_ACCESS_KEY environment variable is missing on Vercel deployment.");
    return { error: "Error de configuración del servidor." }
  }

  // 2. Submit to Web3Forms
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Origin: "https://linksight.app",
        Referer: "https://linksight.app/",
      },
      cache: "no-store",
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: "New Tester for LinkSight Beta",
        email: validEmail,
      }),
    })

    const contentType = response.headers.get("content-type") || ""
    if (!contentType.includes("application/json")) {
      const rawText = await response.text()
      console.error(`Non-JSON response (Status ${response.status}):`, rawText.slice(0, 300))
      return { error: `Server error ${response.status}: Response is not JSON.` }
    }

    const data = await response.json()

    if (!response.ok || data.success === false) {
      console.error("Web3Forms API Error:", data.message || "Unknown error")
      return { error: data.message || "Something went wrong" }
    }

    return { success: true }
  } catch (err: any) {
    console.error("Native error in submitToBeta Server Action:", err)
    return { error: `Network error: ${err?.message || String(err)}` }
  }
}
