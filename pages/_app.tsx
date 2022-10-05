import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import FullPageSpinner from '../components/fullPageSpinner'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FullPageSpinner />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
