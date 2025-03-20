import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KC Design Co',
  description: 'Custom Design & 3D Printing Service',
  icons: {
    icon: '/kc-logo.png',
    apple: '/kc-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}
