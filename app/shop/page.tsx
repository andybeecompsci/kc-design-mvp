import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import Footer from "@/components/footer"
import Header from "@/components/header"

// # mock data for products - in a real app this would come from an API or database
const products = [
  {
    id: 1,
    title: "Product 1",
    price: 24.99
  },
  {
    id: 2,
    title: "Product 2",
    price: 18.99
  },
  {
    id: 3,
    title: "Product 3",
    price: 34.99
  },
  {
    id: 4,
    title: "Product 4",
    price: 39.99
  },
  {
    id: 5,
    title: "Product 5",
    price: 29.99
  },
  {
    id: 6,
    title: "Product 6",
    price: 19.99
  }
]

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
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
            {/* # products grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 