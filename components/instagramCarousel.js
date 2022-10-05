import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InstagramCarousel = (props) => {
  const [images, setImages] = useState(null);
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL_BASE;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/instagram-carousels?populate=images`
      );
      const newData = await response.json();
      setImages(newData);
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    // beforeChange: (current, next) => {
    //   setImageIndex(next)
    // },
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          swipeToSlide: true,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          swipeToSlide: true,
          arrows: false,
          centerMode: true,
          // centerPadding: '29px 0px 0px',
        },
      },
    ],
  };

  if (images) {
    return (
      <>
        <p className="text-center text-lg pt-10">Follow me on Instagram!</p>
        <a
          href="https://www.instagram.com/amongcreatives/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mb-10 relative">
            <Slider {...settings}>
              {images.data[0].attributes.images.data.map((image, idx) => {
                return (
                  <img
                    key={idx}
                    className="h-full max-h-[25rem]"
                    src={`${baseUrl}${image.attributes.url}`}
                    alt={image.attributes.alternativeText}
                  />
                );
              })}
            </Slider>
            <div className="w-full text-sm md:text-[17px] grid place-items-center mt-[-4rem] absolute">
              <p className="bg-accent py-2 px-8 text-center max-w-xs m-auto opacity-90">
                @amongcreatives
              </p>
            </div>
          </div>
        </a>
      </>
    );
  } else {
    return (
      <>
        <p className="text-center text-lg pt-10">Follow me on Instagram!</p>
        <p className="text-center">loading images...</p>
      </>
    );
  }
};

export default InstagramCarousel;
