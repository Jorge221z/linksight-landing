"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { BetaForm } from "@/components/beta-form"

export function BetaButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={className}>
      <button
        onClick={() => setOpen(true)}
        className="relative flex items-center gap-0 bg-blue-600 text-white rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden hover:bg-blue-700 cursor-pointer"
      >
        <span className="text-sm pr-4 font-medium">Join Closed Beta</span>
        <span className="w-9 h-9 bg-blue-700 group-hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl border border-zinc-200 p-6 sm:p-8">
          <DialogHeader className="text-center sm:text-center mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-3">
              Closed Beta
            </p>
            <DialogTitle className="text-2xl font-normal font-serif text-zinc-900 leading-snug">
              Get early access to LinkSight
            </DialogTitle>
            <DialogDescription className="text-zinc-500 text-sm leading-relaxed mt-2">
              Join the closed beta and start calculating line of sight with unprecedented precision. We&apos;ll send you the Google Play invite directly.
            </DialogDescription>
          </DialogHeader>
          <BetaForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}
