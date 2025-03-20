"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  price: number
}

export default function ProductCard({ title, price }: ProductCardProps) {
  return (
    <div className="group relative rounded-lg border p-4 hover:border-primary transition-colors">
      <Link href="/shop" className="block">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
          <Image
            src="/images/placeholder.png"
            alt={title}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-primary font-semibold">${price.toFixed(2)}</p>
        </div>
      </Link>
      
      <Button 
        onClick={() => {
          // # this would typically trigger a cart context update
          alert('Item added to cart!');
        }}
        className="w-full mt-4 bg-primary hover:bg-primary/90 text-text-white"
      >
        Add to Cart
      </Button>
    </div>
  )
}

