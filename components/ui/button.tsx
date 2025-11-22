import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
      variants: {
        variant: {
          default:
            "btn-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
          destructive:
            "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:from-red-700 hover:to-red-800 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 transition-all duration-300",
          outline:
            "border-2 border-blue-500/50 bg-transparent text-blue-400 shadow-sm hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-300 dark:bg-gray-900/50 dark:border-blue-500/30 dark:hover:bg-blue-500/10 transition-all duration-300",
          secondary:
            "bg-gray-800/80 text-blue-300 border border-blue-500/30 shadow-sm hover:bg-gray-800 hover:border-blue-500/60 hover:text-blue-200 transition-all duration-300",
          ghost:
            "hover:bg-blue-500/10 hover:text-blue-300 text-gray-300 transition-all duration-300",
          link: "text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline transition-colors",
        },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
