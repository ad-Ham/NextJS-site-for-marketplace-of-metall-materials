import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <body>
        <Main className="container" />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;