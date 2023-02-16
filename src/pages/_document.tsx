import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  
  render() {
    return (
      <Html>
        <Head>
          {/** Metadata - General */}
          <meta name="description" content="SalmorejoTech es un evento tecnológico para todos aquellos dispuestos a aprender" />
          <meta name="keywords"
            content="evento, ASL, salmorejo, salmorejotech, tech, salmorejotech2023, 2023, salmorejotech2022, 2022, salmorejotech2021, congreso, mesa redonda, conferencia, libre, software libre" />
          <link rel="canonical" href="https://salmorejo.tech" />
          <link rel="icon" href="/images/favicon.ico" />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />
          {/** Social - Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@AulaSL" />
          <meta name="twitter:title" content="SalmorejoTech 2023" />
          <meta name="twitter:description"
            content="SalmorejoTech es un evento tecnológico para todos aquellos dispuestos a aprender" />
          <meta name="twitter:image" content="/images/seo/salmorejo.jpg" />
          {/** Social - Facebook / Open Graph */}
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="SalmorejoTech 2023" />
          <meta name="og:title" content="SalmorejoTech 2023" />
          <meta name="og:description"
            content="SalmorejoTech es un evento tecnológico para todos aquellos dispuestos a aprender" />
          <meta name="og:image" content="/images/seo/salmorejo.jpg" />
          <meta name="og:url" content="https://salmorejo.tech/2023/" />

          {/** Icons / Favicon */}
          <link rel="shortcut icon" href="/favicons/favicon.ico" />

          <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" />
          <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" href="/favicons/favicon-150x150.png" />
          <link rel="icon" type="image/png" href="/favicons/favicon-310x310.png" />

          <link rel="apple-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
          <link rel="apple-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
          <link rel="apple-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
          <link rel="apple-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
          <link rel="apple-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
          <link rel="apple-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
          <link rel="apple-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
          <link rel="apple-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />

          <meta name="msapplication-TitleColor" content="#2b5797" />
          <meta name="msapplication-TitleImage" content="/favicons/mstile-144x144.png" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#2b5797" />          

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;