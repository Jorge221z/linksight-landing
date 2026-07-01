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
      },
      cache: "no-store",
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: "New Tester for LinkSight Beta",
        email: validEmail,
      }),
    })

    const data = await response.json()

    if (!response.ok || data.success === false) {
      console.error("Web3Forms API Error:", data.message || "Unknown error")
      return { error: data.message || "Something went wrong" }
    }

    return { success: true }
  } catch (err) {
    console.error("Native error in submitToBeta Server Action:", err)
    return { error: "Network error" }
  }
}
