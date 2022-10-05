import { fetcher } from "../../../../lib/api";
import VerticalText from "../../../../components/verticalText";
import useMediaQuery from "../../../../helpers/breakpoints";

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
    props: { client: data },
  };
}

const ClientDetailsPage = ({ client }) => {
  const data = client && client.data[0].attributes.clients[0];
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL_BASE;

  const isBreakpoint = useMediaQuery(600)

  return (
    <>
      <div className="flex px-4 mt-24 lg:mt-12 lg:px-20">
        <VerticalText>{client && data.name}</VerticalText>
        {isBreakpoint ? (
          <div className='grid grid-cols-3 gap-2 ml-3 md:mx-4'>
            {!data.images.data < 1 ?
              (data.images.data.map((image, idx) => {
                if (idx === 0 || idx === 7 || idx === 9 || idx === 12 || idx === 15) {
                  return (
                    <img className='row-span-2 col-span-2' key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                  )
                } else if (idx >= 18) {
                  return (
                    <img className='row-span-2 col-span-3' key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                  )
                } else {
                  return (
                    <img key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                  )
                }

              })) : null
            }
          </div>
        ) : (
          <div className='mx-4 md:px-10 lg:px-20 grid grid-cols-4 gap-2 max-w-6xl m-auto'>
            {!data.images.data < 1 ?
              (data.images.data.map((image, idx) => {
                if (idx === 0 || idx === 7 || idx === 8 || idx === 13 || idx === 14) {
                  return (
                    <img className='row-span-2 col-span-2' key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                  )
                } else if (idx >= 17) {
                  return (
                    <img className='row-span-2 col-span-2' key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                  )
                } else {
                  return (
                    <img key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                  )
                }

              })) : null
            }
          </div>
        )}
      </div>
    </>
  );
};

// just a comment

export default ClientDetailsPage;
