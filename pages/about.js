import AboutSectionAbout from "../components/aboutSectionAbout";
import Divider from "../components/divider";
import PrimaryButton from "../components/primaryButton";
import Banner from "../components/banner";
import FAQ from "../components/faq";
import { fetcher } from "../lib/api";
import Head from "next/head";

const AboutPage = ({ faqs }) => {
  return (
    <>
      <Head>
        <title>Among creatives | about</title>
        <meta
          name="description"
          content="I'm Nass, a Fashion, lifestyle and product photographer for sustainable and conscious businesses between Bali and Europe. I help wonderful brands to grow their online presence and visual identity."
        />
      </Head>
      <AboutSectionAbout />
      {/* <div className="">
        <p className="text-[1.8em] lg:text-[2.2em] md:mb-6 leading-8 lg:leading-10 px-4 mb-10 mt-5 md:py-20 lg:py-16 md:text-center max-w-5xl md:m-auto font-Cormorant">
          Frequently Asked Questions
        </p>
      </div> */}
      <FAQ faqs={faqs} />
    </>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const faqsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/faqs`
  );

  return {
    props: {
      faqs: faqsResponse.data,
    },
  };
}
