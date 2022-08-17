import 'normalize.css'
import '../styles/globals.css'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

function MyApp({ Component, pageProps }) {
  const { headerProps } = pageProps

  return (
    <>
      <Header {...headerProps} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
