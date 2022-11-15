import useMediaQuery from "../../helpers/breakpoints";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const PortfolioImageSlider = ({ portfolioImages }) => {
  const isBreakpoint = useMediaQuery(768);
  //   const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL_BASE;

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: false,
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="ml-4 my-4 w-full md:max-w-[65vw] lg:max-w-[55vw] xl:max-w-[55vw] ">
          <Slider {...settings}>
            {portfolioImages &&
              portfolioImages.data.map((image, idx) =>
                !isBreakpoint
                  ? image.attributes.DesktopImage.data.map((portfolioImage) => {
                      return (
                        // <Image key={idx} src={`${baseUrl}${portfolioImage.attributes.url}`} alt={portfolioImage.attributes.alternativeText} />
                        <Image
                          key={idx}
                          priority={true}
                          src={`${portfolioImage.attributes.url}`}
                          alt={portfolioImage.attributes.alternativeText}
                          layout="responsive"
                          objectFit="cover"
                          width="100%"
                          height="58vh"
                        />
                      );
                    })
                  : image.attributes.MobileImage.data.map((portfolioImage) => {
                      return (
                        // <Image key={idx} src={`${baseUrl}${portfolioImage.attributes.url}`} alt={portfolioImage.attributes.alternativeText} />
                        <Image
                          key={idx}
                          src={`${portfolioImage.attributes.url}`}
                          alt={portfolioImage.attributes.alternativeText}
                          layout="responsive"
                          objectFit="cover"
                          width="100%"
                          height="120vh"
                        />
                      );
                    })
              )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default PortfolioImageSlider;
