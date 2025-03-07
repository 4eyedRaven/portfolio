// app/layout.tsx

import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Josh Loughran - Portfolio',
  description: 'Josh Loughran - Portfolio',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicon/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicon/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicon/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicon/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicon/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: { url: '/favicon/favicon.ico' },
  },
  manifest: '/favicon/manifest.json',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/favicon/ms-icon-144x144.png',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Read cookies from the request.
  const cookieStore = await cookies()
  // Default to 'light' if no theme is set.
  const theme = cookieStore.get('theme')?.value || 'light'
  // Read the locale cookie; default to English ('en') if none exists.
  const locale = cookieStore.get('locale')?.value || 'en'

  return (
    <html lang={locale} className={theme} style={{ colorScheme: theme }}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme={theme}
          // Disable system theme detection for consistency.
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}