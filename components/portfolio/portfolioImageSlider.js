import useMediaQuery from "../../helpers/breakpoints";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioImageSlider = ({ portfolioImages }) => {
  const isBreakpoint = useMediaQuery(768);

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
                        <img
                          key={idx}
                          src={`${portfolioImage.attributes.url}`}
                          alt={portfolioImage.attributes.alternativeText}
                          layout="responsive"
                          width="100%"
                          loading="eager"
                          height="58vh"
                        />
                      );
                    })
                  : image.attributes.MobileImage.data.map((portfolioImage) => {
                      return (
                        <img
                          key={idx}
                          src={`${portfolioImage.attributes.url}`}
                          alt={portfolioImage.attributes.alternativeText}
                          layout="responsive"
                          width="100%"
                          loading="eager"
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
