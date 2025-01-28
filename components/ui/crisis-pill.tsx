'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface CrisisPillProps {
  href: string
  label: string
  announcement: string
  className?: string
}

export function CrisisPill({ href, label, announcement, className }: CrisisPillProps) {
  return (
    <Link href={href}>
      <motion.div
        className={twMerge(
          "group relative inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive/20 dark:bg-destructive/20 dark:text-destructive-foreground dark:hover:bg-destructive/30",
          className
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="font-semibold">{announcement}</span>
        <span className="h-3.5 w-[1px] bg-destructive/30 dark:bg-destructive-foreground/30" />
        <span>{label}</span>
        <span
          className="absolute -inset-4 -z-10 scale-95 rounded-2xl bg-destructive/5 opacity-0 blur transition group-hover:scale-100 group-hover:opacity-100 dark:bg-destructive/10"
          aria-hidden="true"
        />
      </motion.div>
    </Link>
  )
}
