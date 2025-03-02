import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Josh Loughran - Portfolio',
  description: 'Josh Loughran - Portfolio',
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
      </body>
    </html>
  )
}