import PortfolioImageSlider from "../../components/portfolio/portfolioImageSlider";
import PortfolioTitles from "../../components/portfolio/portfolioTitles";
import VerticalTitle from "../../components/verticalTitle";
import { fetcher } from "../../lib/api";

const PortfolioPage = ({ category, categoryImages }) => {

    return (
        <>
            <div className="px-4 mt-24 lg:mt-4 lg:px-20">
                <div className="md:flex md:justify-between md:items-center">
                    <div className="order-2">
                        <PortfolioTitles category={category} />
                    </div>
                    <div className="flex order-1">
                        <VerticalTitle>Portfolio</VerticalTitle>
                        <PortfolioImageSlider portfolioImages={categoryImages} />
                    </div>
                </div>
                <div className="mt-10 max-w-3xl lg:pl-20">
                    <p>I have been working with various conscious brands and creatives from fashion to products and branding helping them to tell their story through my lens.</p>
                    <p>Have a look at some of my recent projects.</p>
                </div>
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