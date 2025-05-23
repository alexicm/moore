"use client"

import Image from "next/image"
import { Suspense, lazy } from "react"

// Lazy load the SplashCursor component
const SplashCursor = lazy(() => import("@/components/splash-cursor"))

export default function Page() {
  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fundo-verde-2.jpg"
            alt="Green Texture Background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-between">
          {/* Logo Container */}
          <div className="flex flex-1 items-center justify-center p-4">
            <div className="flex flex-col items-center gap-8">
              <div className="relative h-[100px] w-[300px] sm:h-[150px] sm:w-[450px] md:h-[200px] md:w-[600px]">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0649/1353/9116/files/logo_1_com_tagline_moore-02.svg?v=1748036902"
                  alt="Moore Brasil Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 450px, 600px"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full bg-black/50 p-4 text-center">
            <p className="text-sm font-light text-white sm:text-base">TODOS OS DIREITOS RESERVADOS © MOORE BRASIL</p>
          </footer>
        </div>
      </main>

      {/* SplashCursor Effect */}
      <Suspense fallback={null}>
        <SplashCursor
          // Customize with Moore brand colors from the palette
          COLOR_UPDATE_SPEED={5}
          SPLAT_RADIUS={0.3}
          SPLAT_FORCE={8000}
          DENSITY_DISSIPATION={2.5}
          VELOCITY_DISSIPATION={1.5}
          CURL={4}
          TRANSPARENT={true}
        />
      </Suspense>
    </>
  )
}
