"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

/**
 * Primary site navigation — works in both light and dark mode,
 * includes theme toggle and CTA.  Exports:
 *   • default  – for `import Navigation from "@/components/navigation"`
 *   • Navigation – named export
 */
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Technology", href: "/technology" },
    { label: "Business Model", href: "/business-model" },
    { label: "About", href: "/about" },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
            <span className="text-sm font-bold text-background">A</span>
          </div>
          <span className="text-lg font-bold text-foreground">The&nbsp;Ad-Project</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            Get&nbsp;Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen((p) => !p)}
            className="text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-background md:hidden"
          >
            <div className="container mx-auto flex flex-col space-y-4 py-4 px-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              ))}

              <Button size="sm" className="mt-2 bg-foreground text-background hover:bg-foreground/90">
                Get&nbsp;Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export { Navigation }
export default Navigation
