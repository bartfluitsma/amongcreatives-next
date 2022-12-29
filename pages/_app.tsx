import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import FullPageSpinner from '../components/fullPageSpinner'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <FullPageSpinner /> */}
      <Head>

        <title>Among creatives | Fashion, lifestyle &amp; Product photography</title>
        <meta name='description' content='Fashion, lifestyle and product photographer for sustainable and conscious businesses worldwide.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icons/logo-among-creatives-small.svg" />
        <meta name='robots' content='index, follow' />
      </Head>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-KL5ZHCWRSW');;
  `,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
