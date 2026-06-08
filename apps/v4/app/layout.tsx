import { Geist, Geist_Mono } from "next/font/google"

import { cn } from "@/lib/utils"

import "@/styles/globals.css"

import { NuqsAdapter } from "nuqs/adapters/next/app"

import { LayoutProvider } from "@/hooks/use-layout"
import { ActiveThemeProvider } from "@/components/active-theme"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider as BaseTooltipProvider } from "@/registry/bases/base/ui/tooltip"
import { Toaster } from "@/registry/bases/radix/ui/sonner"
import { TooltipProvider as RadixTooltipProvider } from "@/registry/bases/radix/ui/tooltip"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body
        className={cn(
          "group/body overscroll-none antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]"
        )}
      >
        <ThemeProvider>
          <LayoutProvider>
            <ActiveThemeProvider>
              <LayoutProvider>
                <NuqsAdapter>
                  <BaseTooltipProvider delay={0}>
                    <RadixTooltipProvider delayDuration={0}>
                      {children}
                      <Toaster position="top-center" />
                    </RadixTooltipProvider>
                  </BaseTooltipProvider>
                </NuqsAdapter>
              </LayoutProvider>
            </ActiveThemeProvider>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}