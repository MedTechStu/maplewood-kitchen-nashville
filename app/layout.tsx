import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Maplewood Kitchen | Nashville Brunch & Breakfast',
  description: 'A casual American brunch spot serving fresh, warm meals in Nashville. Join us for buttermilk pancakes, avocado toast, and more at 412 Maplewood Ave.',
  keywords: ['Nashville brunch', 'breakfast Nashville', 'Maplewood Kitchen', 'American brunch', 'Nashville restaurant'],
  openGraph: {
    title: 'Maplewood Kitchen | Nashville Brunch & Breakfast',
    description: 'A casual American brunch spot serving fresh, warm meals in Nashville.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#A45C40',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${playfair.variable} ${lora.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
