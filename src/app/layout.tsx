import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../../components/header'
import ActiveSection from '../../context/ActiveSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minh Nguyen',
  description: 'A full-stack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning={true}>
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <ActiveSection>
        {children}
        </ActiveSection>
        
        </body>
    </html>
  )
}
