import PortfolioImageSlider from "../../components/portfolio/portfolioImageSlider";
import PortfolioTitles from "../../components/portfolio/portfolioTitles";
import { fetcher } from "../../lib/api";

const PortfolioPage = ({ category, categoryImages }) => {

    return (
        <>
            <div>
                <h1>Portfolio</h1>
                <PortfolioImageSlider portfolioImages={categoryImages} />
                <PortfolioTitles category={category} />
            </div>

        </>
    );
}

export default PortfolioPage;

export async function getStaticProps() {
    const [categoryResponse, imagesResponse] = await Promise.all([
        fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`),
        fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolio-images?populate=*`)
    ])

    return {
        props: {
            category: categoryResponse,
            categoryImages: imagesResponse
        }
    }
}