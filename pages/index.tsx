import type { NextPage } from "next";
import HeroSectionHomepage from "../components/heroSectionHome";
import AboutSectionHome from "../components/aboutSectionHome";
import LatestWorkSectionHome from "../components/latestWorkSectionHome";
import Banner from "../components/banner";
import ImagesGridLayout from "../components/imagesGridLayout";
import PackagesCarousel from "../components/packages/packagesCarousel";
import Divider from "../components/divider";
import { fetcher } from "../lib/api";

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
    <div>
      <HeroSectionHomepage />
      <LatestWorkSectionHome category={category} />
      {/* <Banner>
        By capturing bespoke and creative shots, I will tell the story of your
        product and get your audience to stop scrolling!
      </Banner> */}
      <div className="grid place-items-center mt-20">
        <Divider />
        <p className="font-Cormorant text-center text-3xl lg:text-[2rem] px-4 max-w-5xl">
          By capturing bespoke and creative shots, I will tell the story of your
          product and get your audience to stop scrolling!
        </p>
      </div>
      <AboutSectionHome />
      {/* <ImagesGridLayout /> */}
      {/* <PackagesCarousel /> */}
    </div>
  );
};

export default Home;
