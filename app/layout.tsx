import type { Metadata } from 'next'
import './globals.css'
import { EB_Garamond } from 'next/font/google'
 
const font = EB_Garamond({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'prinetta ^__^',
  description: 'corner of all the things i find exciting & sweet in life !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
