import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import ProductCard from "@/components/product-card"
import Footer from "@/components/footer"

// # mock data for products - in a real app this would come from an API or database
const products = [
  {
    id: 1,
    title: "Custom T-Shirt",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Apparel"
  },
  {
    id: 2,
    title: "Handmade Mug",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor"
  },
  {
    id: 3,
    title: "Personalized Sign",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor"
  },
  {
    id: 4,
    title: "Custom Hoodie",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Apparel"
  },
  {
    id: 5,
    title: "Decorative Pillow",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor"
  },
  {
    id: 6,
    title: "Custom Phone Case",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories"
  }
]

// # available categories for filtering
const categories = ["All", "Apparel", "Home Decor", "Accessories"]

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* # header section */}
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
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium text-primary">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* # shop hero section */}
        <section className="w-full py-12 md:py-16 bg-background-alt">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Products</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Browse our collection of handcrafted items made with love and attention to detail
              </p>
            </div>
          </div>
        </section>

        {/* # shop content section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            {/* # filtering options */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-text-white"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* # products grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>

            {/* # load more button */}
            <div className="mt-12 text-center">
              <Button className="bg-primary hover:bg-primary/90 text-text-white">
                Load More Products
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 