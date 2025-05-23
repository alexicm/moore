import Image from "next/image"
import { dmSans } from "../fonts"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { OptimizedBackground } from "@/components/optimized-background"

// Lazy load the SplashCursor component since it's not critical for initial render
const SplashCursor = dynamic(() => import("@/components/splash-cursor"), {
  ssr: false, // Disable server-side rendering for WebGL component
  loading: () => null, // No loading indicator needed for this effect
})

export default function Page() {
  return (
    <>
      <OptimizedBackground>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-between">
          {/* Logo container - adjusted for better mobile display */}
          <div className="flex-1 flex items-center justify-center w-full px-4">
            <div className="relative w-[220px] h-[160px] sm:w-[320px] sm:h-[220px] md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[350px]">
              <Image
                src="/images/moore-logo.svg"
                alt="Moore Natural Skin Care"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 220px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
              />
            </div>
          </div>

          {/* Footer - improved for mobile */}
          <footer className="w-full bg-primary/40 backdrop-blur-sm py-3 px-4 text-center">
            <p className={`${dmSans.className} text-xs sm:text-sm md:text-base text-white/90 tracking-wider`}>
              TODOS OS DIREITOS RESERVADOS © MOORE NATURAL SKIN CARE
            </p>
          </footer>
        </div>
      </OptimizedBackground>

      {/* Lazy load the SplashCursor effect */}
      <Suspense fallback={null}>
        <SplashCursor
          // Customize with Moore brand colors
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
