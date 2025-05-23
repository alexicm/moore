import localFont from "next/font/local"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"

// Optimize font loading with display swap and preload
export const galano = localFont({
  src: "./fonts/GalanoGrotesque-Light.woff2",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
  preload: true,
  fallback: ["serif"],
})

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})
