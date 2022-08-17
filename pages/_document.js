import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Montserrat:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link
            rel="manifest"
            href="/favicon/site.webmanifest"
          />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="shortcut icon"
            href="/favicon/favicon.ico"
          />
          <meta
            name="msapplication-TileColor"
            content="#da532c"
          />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta
            name="theme-color"
            content="#ffffff"
          />
          <meta
            name="robots"
            content="noindex,nofollow"
          />
        </Head>
        <body className="bg-slate-400 font-body text-s text-gray-100 l:text-m">
          <Main />
          <div id="mobile_nav" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
