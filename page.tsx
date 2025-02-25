import Image from "next/image"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOORE---APRESENTAC%CC%A7A%CC%83O1-SKj1GWmYEu8gXoKKNlWKrpzwdk3I2I.png"
          alt="Background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between">
        {/* Logo Container */}
        <div className="flex flex-1 items-center justify-center p-4">
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-[100px] w-[300px] sm:h-[150px] sm:w-[450px] md:h-[200px] md:w-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20MOORE_branca-4wnUiYDlTpjPzA16HxoVJu3mT8xZVV.png"
                alt="Moore Brasil Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p
              style={{ fontFamily: "Galano Grotesque Light" }}
              className="text-xl sm:text-2xl md:text-3xl text-white opacity-90 tracking-wide transition-opacity duration-300 hover:opacity-100"
            >
            Em breve.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-black/50 p-4 text-center">
          <p className="text-sm font-light text-white sm:text-base">TODOS OS Direitos Reservados © MOORE BRASIL</p>
        </footer>
      </div>
    </main>
  )
}

