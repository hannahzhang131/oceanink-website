import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipe Connects - Worldwide Food in Your Pocket',
  description: 'Discover, share, and organize recipes with Recipe Connects! For food lovers, home cooks, chefs, and everyone—cook, create, and connect today!',
  keywords: [
    'recipes',
    'cooking',
    'food',
    'worldwide cuisine',
    'recipe app',
    'cooking app',
    'food community',
    'recipe sharing',
    'cooking tips',
    'global recipes'
  ],
  authors: [{ name: 'OceanInk Ltd' }],
  creator: 'OceanInk Ltd',
  publisher: 'OceanInk Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oceanink.uno',
    siteName: 'Recipe Connects',
    title: 'Recipe Connects - Worldwide Food in Your Pocket',
    description: 'Discover, share, and organize recipes with Recipe Connects! For food lovers, home cooks, chefs, and everyone—cook, create, and connect today!',
    images: [
      {
        url: 'https://oceanink.uno/assets/1 (1).png',
        width: 1200,
        height: 630,
        alt: 'Recipe Connects - Worldwide Food in Your Pocket',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recipe Connects - Worldwide Food in Your Pocket',
    description: 'Discover, share, and organize recipes with Recipe Connects! For food lovers, home cooks, chefs, and everyone—cook, create, and connect today!',
    images: ['https://oceanink.uno/assets/1 (1).png'],
  },
  verification: {
    google: 'your-google-verification-code', // 替换为你的 Google Search Console 验证码
  },
  alternates: {
    canonical: 'https://oceanink.uno',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 