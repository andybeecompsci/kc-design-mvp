import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import Header from "@/components/header"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* # contact hero section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background-alt">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Have a question or need a custom quote? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* # contact form section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[600px]">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* # additional contact info */}
        <section className="w-full py-12 md:py-24 bg-primary text-text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Visit Our Store</h2>
                <p>123 Design Street</p>
                <p>Creative District</p>
                <p>Artville, ST 12345</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Business Hours</h2>
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 