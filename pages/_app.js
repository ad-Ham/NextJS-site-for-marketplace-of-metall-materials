import App from 'next/app'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global> {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }

        li {
          list-style: none;
        }

        a {
          text-decoration: none;
        }

        html {
          height: 100%;
          box-sizing: border-box;
        }

        body {
          padding: 0;
          margin: 0;
          font-family: 'Roboto', sans-serif;
          min-height: 100vh;
          display: flex; 
          flex-direction: column; 
        }
        nav {
          font-family: 'Roboto', sans-serif;
        }

        footer {
          flex-shrink: 0;
        }

        .container {
          max-width: 1164px;
          margin: 0 auto;
        }

        .content {
          flex: 1 0 auto;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          max-width: 1164px;
          margin: 0 auto;
          flex-grow: 1;
        }
      `}
      </style>
    </>
  )
}