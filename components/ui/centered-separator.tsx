'use client'

import { Separator } from "@/components/ui/separator"

interface CenteredSeparatorProps {
  className?: string
  fraction?: number
}

export function CenteredSeparator({ className = "", fraction = 8 }: CenteredSeparatorProps) {
  const width = `${100 / fraction}%`

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <Separator 
        className={`h-[2px] ${className}`} 
        style={{ width, backgroundColor: "hsl(var(--foreground))" }} 
      />
      <Separator 
        className={`h-[2px] ${className}`} 
        style={{ width, backgroundColor: "hsl(var(--primary))" }} 
      />
      <Separator 
        className={`h-[2px] ${className}`} 
        style={{ width, backgroundColor: "hsl(var(--foreground))" }} 
      />
    </div>
  )
}
