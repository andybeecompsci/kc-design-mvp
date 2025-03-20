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
        <div className="flex items-center justify-between py-4 w-full px-8">
          <nav className="flex items-center gap-8">
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
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/kc-logo.png"
                alt="KC Design Co Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <h1 className="text-xl font-bold">KC DESIGN CO</h1>
            </Link>
          </div>

          <div className="flex items-center">
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="p-2 hover:text-primary"
            >
              <ShoppingBag className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  )
} 