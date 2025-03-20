"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag } from "lucide-react"
import CartSidebar from "./cart-sidebar"
import Image from "next/image"

export default function Header() {
  // # get current path to highlight active link
  const pathname = usePathname()
  
  // # cart state
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex items-center justify-between py-4 relative">
          {/* Left: Navigation */}
          <nav className="flex items-center gap-4 md:gap-8">
            <Link 
              href="/" 
              className={`text-sm md:text-lg font-bold transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : ""}`}
            >
              HOME
            </Link>
            <Link 
              href="/shop" 
              className={`text-sm md:text-lg font-bold transition-colors hover:text-primary ${pathname === "/shop" ? "text-primary" : ""}`}
            >
              SHOP
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm md:text-lg font-bold transition-colors hover:text-primary ${pathname === "/contact" ? "text-primary" : ""}`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/kc-logo.png"
                alt="KC Design Co Logo"
                width={40}
                height={40}
                className="h-8 w-auto md:h-12"
              />
              <h1 className="text-lg md:text-xl font-bold whitespace-nowrap">KC DESIGN CO</h1>
            </Link>
          </div>

          {/* Right: Cart */}
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="p-2 hover:text-primary"
          >
            <ShoppingBag className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </header>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  )
} 