import type { Metadata } from 'next'
import { Inter, Outfit, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })

export const metadata: Metadata = {
  title: '5% - La plateforme freelance–entreprise',
  description: 'La plateforme freelance–entreprise à 5 %. Vous trouvez une mission, vous gardez 95 % de votre TJM.',
  icons: {
    icon: [
      { url: '/logo-black.png', media: '(prefers-color-scheme: light)' },
      { url: '/logo-white.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
}

import ScrollAnimation from './components/ScrollAnimation'
import CustomCursor from './components/CustomCursor'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} ${syne.variable}`}>
      <body className={inter.className}>
        <ScrollAnimation />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
