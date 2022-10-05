import useMediaQuery from "../../helpers/breakpoints";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PortfolioImageSlider = ({ portfolioImages }) => {
    const isBreakpoint = useMediaQuery(768)
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL_BASE

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
    }

    return (
        <>
            <div className="w-full overflow-hidden">
                <div className="ml-4 my-4 w-full md:max-w-[65vw] lg:max-w-[55vw] xl:max-w-[65vw] ">
                    <Slider {...settings}>
                        {portfolioImages && portfolioImages.data.map((image, idx) =>
                            !isBreakpoint ? (
                                image.attributes.DesktopImage.data.map((portfolioImage) => {
                                    return (
                                        <img key={idx} src={`${baseUrl}${portfolioImage.attributes.url}`} alt={portfolioImage.attributes.alternativeText} />
                                    )
                                })
                            ) : (
                                image.attributes.MobileImage.data.map((portfolioImage) => {
                                    return (
                                        <img key={idx} src={`${baseUrl}${portfolioImage.attributes.url}`} alt={portfolioImage.attributes.alternativeText} />
                                    )
                                })
                            )
                        )}
                    </Slider>
                </div>
            </div>

        </>
    );
}

export default PortfolioImageSlider