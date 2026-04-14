"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
        <nav className="mx-auto max-w-7xl rounded-[24px] bg-card/70 backdrop-blur-xl border border-border/50 px-6 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Maplewood Kitchen
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side - Instagram & Reserve */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://instagram.com/maplewoodkitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.opentable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
              >
                Reserve a Table
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-24 px-4 md:hidden"
          >
            <div className="bg-card/95 backdrop-blur-xl rounded-[24px] border border-border/50 p-6 shadow-xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium py-3 px-4 rounded-xl transition-colors",
                      pathname === link.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="border-border my-2" />
                <div className="flex items-center justify-between">
                  <a
                    href="https://instagram.com/maplewoodkitchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>@maplewoodkitchen</span>
                  </a>
                </div>
                <a
                  href="https://www.opentable.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-center font-medium hover:bg-accent transition-colors"
                >
                  Reserve a Table
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
