import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import AnimatedBackground from '@/components/animated-bg'
import { portfolioContent } from '@/lib/portfolio-content'

export const metadata: Metadata = {
  title: portfolioContent.metadata.title,
  description: portfolioContent.metadata.description,
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased text-foreground overflow-x-hidden">
        <AnimatedBackground />
        <div className="relative z-0">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
