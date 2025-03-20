"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  // # get current path to highlight active link
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="container flex flex-col items-center py-6">
        <Link href="/" className="mb-4 flex items-center gap-1">
          <img
            src="/kc-logo.png"
            alt="KC Design Co Logo"
            className="h-8 w-auto"
          />
          <h1 className="text-xl font-bold">DESIGN CO</h1>
        </Link>
        <nav className="flex items-center gap-16">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : ""}`}
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/shop" ? "text-primary" : ""}`}
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/about" ? "text-primary" : ""}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/contact" ? "text-primary" : ""}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
} 