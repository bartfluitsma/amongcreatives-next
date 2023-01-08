import Head from "next/head";
import { useEffect, useState } from "react";
import PortfolioTitlePageSkeleton from "../../components/skeletons/portfolioTitlePage";
import { fetcher } from "../../lib/api";
import LatestWorkSectionHomePortfolio from "../../components/latestWorkSectionPortfolio";

const PortfolioPage = ({ category }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      setTimeout(() => {
        setLoading(false);
      });
    }
  }, []);

  return (
    <>
      <>
        <Head>
          <title>Among creatives | portfolio</title>
          <meta
            name="description"
            content="Have a look at my latest work in Fashion & product photography for sustainable and ethical brands. I'm helping them to tell their story through my lens."
          />
        </Head>
        <div className="px-4 mt-24 lg:mt-4 xl:px-24 -z-50">
          <div className="mt-10 max-w-3xl text-center m-auto">
            <h1 className="invisible h-0">Portfolio</h1>
            <p>
              I have been working with various conscious brands and creatives
              from fashion to products helping them to tell their story through
              my lens.
            </p>
            <p>Have a look at some of my recent projects.</p>
          </div>
          <LatestWorkSectionHomePortfolio category={category} />
        </div>
      </>
    </>
  );
};

export default PortfolioPage;

export async function getStaticProps() {
  const categoryPropsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?populate=clients&populate=clients.thumbnail`
  );

  return {
    props: { category: categoryPropsResponse },
  };
}
