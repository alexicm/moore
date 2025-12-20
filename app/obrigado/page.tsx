"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface CheckmarkProps {
  size?: number
  strokeWidth?: number
  color?: string
  className?: string
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.2,
        type: "spring",
        duration: 1.5,
        bounce: 0.2,
        ease: "easeInOut",
      },
      opacity: { delay: i * 0.2, duration: 0.2 },
    },
  }),
}

function Checkmark({ size = 100, strokeWidth = 2, color = "currentColor", className = "" }: CheckmarkProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      className={className}
    >
      <title>Animated Checkmark</title>
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        variants={draw}
        custom={0}
        style={{
          strokeWidth,
          strokeLinecap: "round",
          fill: "transparent",
        }}
      />
      <motion.path
        d="M30 50L45 65L70 35"
        stroke={color}
        variants={draw}
        custom={1}
        style={{
          strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "transparent",
        }}
      />
    </motion.svg>
  )
}

export default function ObrigadoPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/desktop-moore.jpg"
          alt="Moore Brasil Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Logo */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative h-[60px] w-[180px] sm:h-[80px] sm:w-[240px] md:h-[100px] md:w-[300px]">
            <Image
              src="https://cdn.shopify.com/s/files/1/0638/1132/1923/files/logo_1_sem_tagline_moore-02.svg?v=1748136998"
              alt="Moore Brasil Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 240px, 300px"
            />
          </div>
        </motion.div>

        {/* Success Card */}
        <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 sm:p-6 min-h-[350px] sm:min-h-[400px] flex flex-col justify-center bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardContent className="space-y-4 sm:space-y-6 flex flex-col items-center justify-center">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 200,
                },
              }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 blur-xl bg-white/20 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />
                <Checkmark
                  size={60}
                  strokeWidth={3}
                  color="rgb(255 255 255)"
                  className="relative z-10 sm:w-20 sm:h-20"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-4 text-center w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl text-white tracking-tight font-light"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                Obrigado!
              </motion.h1>

              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white/70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <title>Email</title>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="text-white/90 font-light text-sm sm:text-base">
                      Cadastro realizado com sucesso!
                    </span>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                    Você será o primeiro a saber sobre o lançamento da Moore Brasil. Fique atento ao seu e-mail para
                    novidades exclusivas.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-2 sm:space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                <p className="text-white/60 text-xs">Em breve você receberá um e-mail de confirmação</p>

                <Link
                  href="/"
                  className="inline-block w-full bg-white/20 hover:bg-white/30 text-white font-light py-2 sm:py-3 px-4 sm:px-6 rounded-lg border border-white/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                >
                  Voltar ao início
                </Link>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>

        {/* Footer */}
        <motion.footer
          className="mt-6 sm:mt-8 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
        >
          <p className="text-xs sm:text-sm font-light text-white/60">TODOS OS DIREITOS RESERVADOS © MOORE BRASIL</p>
        </motion.footer>
      </div>
    </main>
  )
}
