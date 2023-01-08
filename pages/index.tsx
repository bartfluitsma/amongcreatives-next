import type { NextPage } from "next";
import HeroSectionHomepage from "../components/heroSectionHome";
import AboutSectionHome from "../components/aboutSectionHome";
import LatestWorkSectionHome from "../components/latestWorkSectionHome";
import Divider from "../components/divider";
import { fetcher } from "../lib/api";
import Head from "next/head";

export async function getStaticProps() {
  const categoryPropsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?populate=clients&populate=clients.thumbnail`
  );

  return {
    props: { category: categoryPropsResponse },
  };
}

const Home: NextPage = (category) => {
  return (
    <>
      <Head>
        <title>
          Among creatives | Fashion & Product Photography for Sustainable &
          Ethical Brands
        </title>
      </Head>
      <div>
        <HeroSectionHomepage />
        <LatestWorkSectionHome category={category} />
        <div className="grid place-items-center mt-20">
          <Divider />
          <p className="font-Cormorant text-center text-3xl lg:text-[2rem] px-4 max-w-5xl">
            By capturing bespoke and creative shots, I will tell the story of
            your product and get your audience to stop scrolling!
          </p>
        </div>
        <AboutSectionHome />
      </div>
    </>
  );
};

export default Home;
