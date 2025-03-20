"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Menu, X } from "lucide-react"
import CartSidebar from "./cart-sidebar"
import Image from "next/image"

export default function Header() {
  // # get current path to highlight active link
  const pathname = usePathname()
  
  // # cart state
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="flex items-center justify-between py-4 px-4 relative">
          {/* Mobile: Burger Menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:text-primary md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop: Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-lg font-bold transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : ""}`}
            >
              HOME
            </Link>
            <Link 
              href="/shop" 
              className={`text-lg font-bold transition-colors hover:text-primary ${pathname === "/shop" ? "text-primary" : ""}`}
            >
              SHOP
            </Link>
            <Link 
              href="/contact" 
              className={`text-lg font-bold transition-colors hover:text-primary ${pathname === "/contact" ? "text-primary" : ""}`}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="py-4 px-4 flex flex-col">
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-lg font-bold transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : ""}`}
              >
                HOME
              </Link>
              <Link 
                href="/shop" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-lg font-bold transition-colors hover:text-primary ${pathname === "/shop" ? "text-primary" : ""}`}
              >
                SHOP
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-lg font-bold transition-colors hover:text-primary ${pathname === "/contact" ? "text-primary" : ""}`}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </header>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  )
} 