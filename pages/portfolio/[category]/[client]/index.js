import { fetcher } from "../../../../lib/api";
import VerticalText from "../../../../components/verticalText";
import Head from "next/head";
import PortfolioGridBasicLayout from "../../../../components/portfolio/portfolioImagesGridBase";
import PortfolioGridRandom from "../../../../components/portfolio/portfolioImagesGridRandom";
import ClientPageSkeleton from "../../../../components/skeletons/clientPageSkeleton";
import { useEffect, useState } from "react";
import renderSEO from "../../../../helpers/SEOhelper";
import Link from "next/link";
import renderDescription from "../../../../helpers/renderDescription";

export const getStaticPaths = async () => {
  const categoryPathResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?populate=*`
  );
  const data = categoryPathResponse.data;

  const paths = data
    .map((path) => {
      const category = path.attributes.path.toString().toLowerCase();

      return path.attributes.clients.map((client) => {
        const clientDetails = client.slug.toLowerCase().replace(/\s+/g, "-");

        return {
          params: {
            category: category,
            client: clientDetails,
          },
        };
      });
    })
    .flat(); // Flatten array to avoid nested arrays;

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const category = context.params.category;
  const clients = context.params.client;

  const data = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?filters[path][$eq]=${category}&?populate=*&populate[clients][populate]=*&populate[clients][filters][slug][$eq]=${clients}`
  );

  return {
    props: { client: data, category: category },
  };
}

const ClientDetailsPage = ({ client, category }) => {
  const data = client && client.data[0].attributes.clients[0];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  // change category to fashion without 's', when fashion
  let categoryLinkName = category;
  if (category === "fashions") {
    categoryLinkName = "fashion";
  }

  return (
    <>
      {loading ? (
        <ClientPageSkeleton />
      ) : (
        <>
          <Head>
            <title>Among creatives | {client && data.name}</title>
            <meta name="description" content={renderSEO(data)} />
          </Head>
          <div className="m-auto text-center max-w-xl mt-24 px-6 md:px-0 md:mt-12 mb-0 md:mb-16">
            {console.log({ data })}
            <div className="flex text-sm justify-center">
              <p className="flex justify-center align-middle items-center">
                <Link href="/portfolio">
                  <span className="text-md  mr-2 text-primary hover:cursor-pointer">
                    Portfolio /
                  </span>
                </Link>{" "}
                <Link href={`/portfolio/${category}`}>
                  <span className="text-md mr-2 text-primary hover:cursor-pointer capitalize">
                    {categoryLinkName} /
                  </span>
                </Link>{" "}
                {` ${data.name}`}
              </p>
            </div>
            <p className="mt-0">{renderDescription(data)}</p>
          </div>

          <div className="flex px-4 mt-10 md:mt-24 lg:mt-12 lg:px-20 ">
            <VerticalText>{client && data.name}</VerticalText>

            {data.randomImages ? (
              <PortfolioGridRandom data={data} />
            ) : (
              <PortfolioGridBasicLayout data={data} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ClientDetailsPage;
