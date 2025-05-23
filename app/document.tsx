import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* DNS prefetching */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Add preload for critical assets */}
        <link
          rel="preload"
          href="/fonts/GalanoGrotesque-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
