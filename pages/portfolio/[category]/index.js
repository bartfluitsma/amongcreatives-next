import Head from "next/head";
import CategoryCard from "../../../components/portfolio/categoryCard";
import VerticalText from "../../../components/verticalTitle";
import { fetcher } from "../../../lib/api";

export const getStaticPaths = async () => {
  const categoryPathResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`
  );
  const data = categoryPathResponse.data;

  const paths = data.map((path) => {
    return {
      params: { category: path.attributes.path.toString().toLowerCase() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const category = context.params.category;
  const categoryPropsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?filters[path][$eq]=${category}&?populate[0]=clients&populate[1]=clients.thumbnail`
  );

  return {
    props: { category: categoryPropsResponse },
  };
}

const CategoryOverviewPage = ({ category }) => {
  return (
    <>
      <Head>
        <title>
          Among creatives | {category && category.data[0].attributes.Category}
        </title>
      </Head>
      <div className="flex px-4 mt-24 lg:mt-12 lg:px-20">
        <div>
          <VerticalText>
            {category && category.data[0].attributes.Category}
          </VerticalText>
        </div>
        <div className="ml-auto grid grid-cols-[repeat(auto-fit,_minmax(150px,_250px))] gap-4 lg:gap-8 lg:ml-32 max-w-[82vw]">
          {category && <CategoryCard data={category.data} />}
        </div>
      </div>
    </>
  );
};

export default CategoryOverviewPage;
