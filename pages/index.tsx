import type { NextPage }
    from 'next'
import Head from 'next/head'
import HeroSectionHomepage from "../components/heroSectionHome"
import AboutSectionHome from "../components/aboutSectionHome"
import Banner from "../components/banner"
import ImagesGridLayout from "../components/imagesGridLayout"
import PackagesCarousel from "../components/packages/packagesCarousel"

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Among creatives | Fashion &amp; Product photography</title>
                <link rel="icon" href="/icons/logo-among-creatives-small.svg" />
            </Head>

            <HeroSectionHomepage />
            <AboutSectionHome />
            <Banner>
                By capturing bespoke and creative shots, I will tell the story of your product and get your audience to stop scrolling!
            </Banner>

            <ImagesGridLayout />
            <PackagesCarousel />

        </div>
    )
}

export default Home
