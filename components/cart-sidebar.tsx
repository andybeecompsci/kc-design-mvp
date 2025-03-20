"use client"

import { X } from "lucide-react"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[400px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">SHOPPING CART</h2>
            <button onClick={onClose} className="p-2 hover:text-primary">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="h-[calc(100vh-180px)] overflow-auto">
            {/* Cart is empty state */}
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="mb-4">Your cart is currently empty.</p>
              <button 
                onClick={onClose}
                className="text-primary hover:text-primary/80 font-bold"
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 