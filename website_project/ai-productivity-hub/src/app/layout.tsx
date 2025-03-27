import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '../components/ThemeProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GeometricBackground from '../components/GeometricBackground'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AI Productivity Hub',
  description: 'Learn ways to use AI to improve individual productivity'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GeometricBackground>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </GeometricBackground>
        </ThemeProvider>
      </body>
    </html>
  )
}
