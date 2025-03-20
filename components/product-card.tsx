import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

interface ProductCardProps {
  title: string
  price: number
  image: string
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link href="#" className="absolute inset-0 z-10">
        <span className="sr-only">View {title}</span>
      </Link>
      <div className="aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={300}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" size="sm" className="z-20 relative border-[#6b705c] text-[#6b705c]">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

