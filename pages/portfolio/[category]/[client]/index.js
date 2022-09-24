import { useRouter } from "next/router";
import { fetcher } from "../../../../lib/api";


export const getStaticPaths = async () => {
    const categoryPathResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`
    );
    const data = categoryPathResponse.data;

    const paths = data.map((path) => {
        return {
            params: { category: path.attributes.path.toString().toLowerCase() },
            params: { client: path.attributes.path.toString().toLowerCase() },
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

const ClientdetailsPage = ({ category }) => {
    const router = useRouter();
    const data = category.data;
    const categoryTitle = data[0].attributes.Category;

    return (
        <>
            {console.log('data for category before card', data)}
            <div>{JSON.stringify(router.query)}</div>
            <div className="flex px-4 mt-24 lg:mt-12 lg:px-20">
                <div>
                    <h1 className="[writing-mode:vertical-lr] [-webkit-writing-mode: vertical-lr] [-ms-writing-mode: vertical-lr] rotate-180 text-center">
                        {categoryTitle}
                    </h1>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_250px))] gap-4 lg:gap-8 ml-4 lg:ml-32 max-w-[82vw]">
                    {/* <CategoryCard data={data} /> */}
                </div>
            </div>
        </>
    );
};

export default ClientdetailsPage;


// import { fetcher } from "../../../lib/api";

// const ClientDetailsPage = ({ client }) => {

//     return (
//         <>
//             {console.log('clients data after efetch', client)}
//             <p>Test</p>
//         </>
//     );
// }

// export default ClientDetailsPage;


// export const getStaticPaths = async () => {
//     const categoryPathResponse = await fetcher(
//         `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?populate=*`
//     );
//     const data = categoryPathResponse.data;

//     const categoryPaths = data.map((path) => {
//         return { category: path.attributes.path };
//     });

//     const clientPaths = data.map((path) => {
//         path.attributes.clients.map((client) => {
//             return { client: path.attributes.path }
//         })
//     })

//     return {
//         paths: [
//             { params: { category: categoryPaths.toString().toLowerCase() } },
//             { params: { client: clientPaths.toString().toLowerCase() } },
//         ],
//         fallback: false,
//     };
// };

// export async function getStaticProps(context) {
//     const category = context.params.category;
//     const client = context.params.client;

//     const data = await fetcher(
//         `${process.env.NEXT_PUBLIC_STRAPI_URL_BASE}/categories?filters[path][$eq]=${category}&?populate[clients][populate]=*&populate[clients][filters][name][$eq]=${client}`
//     );

//     return {
//         props: { client: data },
//     };
// }

//WORKS FOR 1, BUT NOT FOR ARRAY because loop is getting multiple names in one url path

// export const getStaticPaths = async () => {
//     const categoryPathResponse = await fetcher(
//         `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?populate=*`
//     );
//     const data = categoryPathResponse.data;

//     const paths = data.map((path) => {
//         const category = path.attributes.path.toString().toLowerCase()
//         const client = path.attributes.clients.map((client) => client.name).toString().toLowerCase().replace(/\s+/g, "-")

//         return {
//             params: {
//                 category: category, client: client
//             },
//         };
//     });

//     return {
//         paths,
//         fallback: false,
//     };
// };