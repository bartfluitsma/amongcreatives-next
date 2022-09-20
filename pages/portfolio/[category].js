import CategoryCard from "../../components/portfolio/categoryCard";
import { fetcher } from "../../lib/api";

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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/${category}?populate=*`
  );

  return {
    props: { category: categoryPropsResponse },
  };
}

const CategoryOverviewPage = ({ category }) => {
  const data = category.data;
  const categoryTitle = data[0].attributes.Category;

  return (
    <>
      {console.log(data)}
      <div className="flex px-4 mt-24 lg:mt-12 lg:px-20">
        <div>
          <h1 className="[writing-mode:vertical-lr] [-webkit-writing-mode: vertical-lr] [-ms-writing-mode: vertical-lr] rotate-180 text-center">
            {categoryTitle}
          </h1>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_250px))] gap-4 lg:gap-8 ml-4 lg:ml-32 max-w-[82vw]">
          <CategoryCard data={data} />
        </div>
      </div>
    </>
  );
};

export default CategoryOverviewPage;
