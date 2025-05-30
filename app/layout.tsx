import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RC',
  description: 'Developer - Silent Programmer'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
