import type React from "react"
import type { Metadata } from "next"
import { galano, cormorant, dmSans } from "../fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Moore Natural Skin Care",
  description: "Cuidados naturais para a pele",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  // Add cache control headers
  other: {
    "Cache-Control": "public, max-age=31536000, immutable",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${galano.className} ${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/images/moore-logo.svg" as="image" type="image/svg+xml" />
      </head>
      <body className="overflow-hidden touch-none">{children}</body>
    </html>
  )
}
