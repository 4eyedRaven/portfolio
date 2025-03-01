// app/layout.tsx
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Josh Loughran - Portfolio',
  description: 'Josh Loughran - Portfolio',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Read the 'theme' cookie on the server
  const cookieStore = await cookies()
  // Default to 'light' if no theme is set
  const theme = cookieStore.get('theme')?.value || 'light'

  return (
    <html lang="en" className={theme} style={{ colorScheme: theme }}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme={theme}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}