import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import ProductCard from "@/components/product-card"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background-alt">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <p className="text-text-primary">Have an idea but don't know how to bring it to life...</p>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">CUSTOM DESIGN & 3D PRINTING SERVICE</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  If you have an idea or want something specific and you are not quite sure how to come about it or can't find something that works, you have come to the right place!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-primary hover:bg-primary/90 text-text-white">Get Started</Button>
                  <Button variant="outline" className="border-primary text-primary">
                    View Our Work
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl">
                <Image
                  alt="3D Printing Service"
                  className="aspect-[4/3] object-cover"
                  height={400}
                  width={600}
                  src="/images/placeholder.png"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">UTILISE YOUR MIND AND YOUR CREATIVITY</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Reach out to us and let us know if there is anything we can do for you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <ProductCard title="Custom T-Shirt" price={24.99} />
              <ProductCard title="Handmade Mug" price={18.99} />
              <ProductCard title="Personalized Sign" price={34.99} />
            </div>
            <div className="flex justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-text-white">View All Products</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background-alt">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-last">
                <Image
                  alt="About Image"
                  className="aspect-[4/3] object-cover"
                  height={400}
                  width={600}
                  src="/images/placeholder.png"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About KC Design Co & Mon The Owner</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hi, I'm Mon or KC (Artist name). I love to design, build and create. I love to take an idea and bring it to life. I'm fortunate enough to have a creative mind and I wanted to encourage others to utilise their own.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let me try and help bring your ideas to life with the help of another pair of eyes and well brains too I guess.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  And if you are here just to have a look around, feel free to look at my own work. I use a filament 3D printer, CAD software and even physical materials like wood and acrylic.
                </p>
                <Button variant="outline" className="border-primary text-primary">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Reviews</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers are saying about our products
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">★★★★★</p>
                    <p className="text-sm font-medium leading-none">Sarah T.</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    "I absolutely love my custom t-shirt! The quality is amazing and it fits perfectly. Will definitely
                    be ordering more!"
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">★★★★★</p>
                    <p className="text-sm font-medium leading-none">Michael R.</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    "The personalized sign I ordered for my wife's birthday was perfect. Great craftsmanship and fast
                    shipping!"
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">★★★★★</p>
                    <p className="text-sm font-medium leading-none">Jessica L.</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    "KC Design Co has become my go-to for gifts. Everything is so unique and the customer service is
                    outstanding!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Newsletter</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with our latest products and promotions
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Email address"
                    type="email"
                  />
                  <Button type="submit" className="bg-text-white text-primary hover:bg-gray-100">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs">By subscribing, you agree to our terms and privacy policy.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

