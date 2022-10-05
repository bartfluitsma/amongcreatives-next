import PackageCarouselCard from '../packages/packageCarouselCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PrimaryButton from '../primaryButton';
import Divider from '../divider'
import { dataPackages } from '../../data/index'

const PackagesCarousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        // beforeChange: (current, next) => {
        //   setImageIndex(next)
        // },
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    swipeToSlide: true,
                    autoplay: false,
                    autoplaySpeed: 3000,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    autoplay: false,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    swipeToSlide: true,
                    arrows: false,
                    autoplay: false,
                    centerMode: true,
                    // centerPadding: '29px 0px 0px',
                },
            },
        ],
    }

    return (
        <>
            <div>
                <Divider />
                <div className='my-10'>
                    <h3 className='text-center'>Packages</h3>
                    <p className='text-center md:max-w-lg mb-10 m-auto px-4'>From mini-shoot, content refresh, product launch or if you're just starting out, the packages below are designed to reply to your needs</p>
                    <div className='max-w-4xl m-auto'>
                        <Slider {...settings}>
                            {dataPackages.map((packageName, idx) => <PackageCarouselCard key={idx} name={packageName.name} description={packageName.description} image={packageName.image} imagesAmount={packageName.amountImages} anchor={packageName.anchor} />)}
                        </Slider>
                    </div>
                    <div className="pt-10 pb-4 grid place-items-center">
                        <PrimaryButton link="/packages">Find out more</PrimaryButton>
                    </div>
                </div>
                <Divider />
            </div>
        </>
    );
}

export default PackagesCarousel;