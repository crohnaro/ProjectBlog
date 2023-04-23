import { Html, Head, Main, NextScript } from 'next/document'

import theme from '../src/theme'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.background.default} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
