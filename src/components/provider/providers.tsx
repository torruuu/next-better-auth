import { QueryProvider } from '@/components/provider/query-provider'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { NextIntlClientProvider } from 'next-intl'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <NextIntlClientProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </NextIntlClientProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}
