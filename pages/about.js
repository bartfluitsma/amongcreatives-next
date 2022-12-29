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
      </Head>
      <AboutSectionAbout />
      <Divider />
      <div className="grid place-items-center mb-20">
        <p className="font-Cormorant text-center text-3xl lg:text-[2rem] px-4 max-w-5xl">
          By capturing bespoke and creative shots, I will tell the story of your
          product and get your audience to stop scrolling!
        </p>
        <p className="mb-5 lg:mb-10">Want to know more?</p>
        <PrimaryButton link="/contact">Contact me</PrimaryButton>
      </div>
      {/* <Banner>Frequently Asked Questions</Banner> */}
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
