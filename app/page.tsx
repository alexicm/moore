"use client"

import Image from "next/image"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/desktop-moore.jpg"
          alt="Moore Brasil"
          fill
          className="object-cover object-center sm:object-center"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="relative h-[100px] w-[300px] xs:h-[120px] xs:w-[360px] sm:h-[140px] sm:w-[420px] md:h-[180px] md:w-[540px] lg:h-[200px] lg:w-[600px]">
          <Image
            src="/images/logo-moore-tagline.png"
            alt="Moore Natural Skin Care"
            fill
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>
    </main>
  )
}
