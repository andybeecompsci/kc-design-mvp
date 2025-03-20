"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  // # state for form type selection
  const [isQuoteForm, setIsQuoteForm] = useState(false)

  return (
    <div className="space-y-8">
      {/* # form type selector */}
      <div className="flex gap-4 justify-center">
        <Button
          variant={!isQuoteForm ? "default" : "outline"}
          className={!isQuoteForm ? "bg-primary text-text-white" : "border-primary text-primary"}
          onClick={() => setIsQuoteForm(false)}
        >
          Simple Contact
        </Button>
        <Button
          variant={isQuoteForm ? "default" : "outline"}
          className={isQuoteForm ? "bg-primary text-text-white" : "border-primary text-primary"}
          onClick={() => setIsQuoteForm(true)}
        >
          Custom Quote
        </Button>
      </div>

      {/* # form title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {isQuoteForm ? "GET A CUSTOM QUOTE" : "SEND US A MESSAGE"}
        </h2>
        <p className="text-gray-500">
          {isQuoteForm 
            ? "Please provide the following information and we'll get back to you with a quote as soon as possible."
            : "Have a question or comment? We'd love to hear from you."}
        </p>
      </div>

      {/* # form fields */}
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium">
            Full name <span className="text-primary">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </div>

        {isQuoteForm && (
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium">
              Type of service needed <span className="text-primary">*</span>
            </label>
            <input
              id="service"
              type="text"
              required
              className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            {isQuoteForm ? "Additional information" : "Message"} <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </div>

        {/* # submit button */}
        <Button type="submit" className="w-full bg-primary text-text-white hover:bg-primary/90">
          Submit
        </Button>
      </form>
    </div>
  )
} 