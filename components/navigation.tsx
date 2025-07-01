"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Business Model", href: "/business-model" },
    { name: "Services", href: "#services" },
    { name: "Technology", href: "#technology" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-foreground" />
            <span className="text-xl font-bold text-high-contrast">The Ad-Project</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-medium-contrast hover:text-high-contrast transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-foreground text-background hover:bg-foreground/90">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-medium-contrast hover:text-high-contrast transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-foreground text-background hover:bg-foreground/90 w-fit">Get Started</Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
