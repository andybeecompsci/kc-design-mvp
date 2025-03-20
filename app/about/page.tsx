import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* # hero section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background-alt">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Story</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        {/* # mission section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  alt="Our workshop"
                  className="object-cover w-full h-full"
                  height={400}
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* # cta section */}
        <section className="w-full py-12 md:py-24 bg-primary text-text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Start Shopping?</h2>
              <p className="mx-auto max-w-[600px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <Button className="bg-text-white text-primary hover:bg-gray-100">
                Visit Our Shop
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 