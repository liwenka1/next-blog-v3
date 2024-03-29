import type { Metadata } from 'next'
import { clsx } from 'clsx'

import '@/styles/globals.css'
import '@/styles/prism-dracula.css'
import '@/styles/prism-plus.css'
import { serif } from '@/fonts/fonts'
import Header from '@/components/header'
import ThemeProvider from '@/components/theme-provider'

export const metadata: Metadata = {
  title: '文凯的菠萝格',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(serif.className, 'mx-auto max-w-2xl px-5 py-12')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
