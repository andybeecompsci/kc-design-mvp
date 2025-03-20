import { Button } from "@/components/ui/button"

// # interface for product card props
interface ProductCardProps {
  title: string
  price: number
  image: string
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="group relative rounded-lg border p-4 hover:border-primary transition-colors">
      {/* # product image */}
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      {/* # product info */}
      <div className="space-y-2">
        <h3 className="font-medium">{title}</h3>
        <p className="text-primary font-semibold">${price.toFixed(2)}</p>
      </div>
      
      {/* # add to cart button */}
      <Button 
        className="w-full mt-4 bg-primary hover:bg-primary/90 text-text-white"
      >
        Add to Cart
      </Button>
    </div>
  )
} 