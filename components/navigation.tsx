"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/business-model", label: "Business Model" },
]

export function Navigation({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b", className)}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo with .ico file */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 overflow-hidden rounded-lg">
            <Image
              src="/logo.ico"
              alt="The Ad-Project Logo"
              width={32}
              height={32}
              unoptimized
            />
          </div>
          <span className="font-bold text-xl">The Ad-Project</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Burger Icon */}
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((p) => !p)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <ul className="space-y-1 px-4 pb-4 pt-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navigation
