"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { Loader2, CheckCircle2 } from "lucide-react"

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

type FormValues = z.infer<typeof formSchema>

export function BetaForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: FormValues) {
    setServerError(null)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "New Tester for LinkSight Beta",
          email: values.email,
          botcheck: false,
        }),
      })

      const data = await response.json()

      if (!response.ok || data.success === false) {
        setServerError("Something went wrong")
      } else {
        setIsSuccess(true)
      }
    } catch {
      setServerError("Something went wrong")
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-50 border border-blue-200 rounded-2xl text-blue-700 max-w-lg mx-auto"
      >
        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
        <p className="text-sm font-medium leading-snug">
          You&apos;re on the list! We&apos;ll send you the Google Play invite soon.
        </p>
      </motion.div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg mx-auto"
        noValidate
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    disabled={isSubmitting}
                    className="h-11 rounded-xl bg-white border-zinc-200 placeholder:text-zinc-400 text-sm focus-visible:ring-blue-500/30 focus-visible:border-blue-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-1.5 text-left" />
              </FormItem>
            )}
          />

          <motion.div whileTap={{ scale: 0.95 }} className="shrink-0">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium w-full sm:w-auto transition-colors duration-200 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Join Closed Beta"
              )}
            </Button>
          </motion.div>
        </div>

        {serverError && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-500 mt-2 text-center"
          >
            {serverError}. Please try again.
          </motion.p>
        )}
      </form>
    </Form>
  )
}
