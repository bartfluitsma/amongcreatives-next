import Image from "next/image";
import Masonry from "react-masonry-css";

const PortfolioGridRandom = ({ data }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
  };
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid max-w-4xl  ml-4 md:m-auto"
        columnClassName="my-masonry-grid_column"
      >
        {data.images.data.map((image, idx) => {
          return (
            <img
              className="p-[4px]"
              key={idx}
              src={`${image.attributes.url}`}
              width={"100%"}
              height={"100%"}
              alt={image.attributes.alternativeText}
            />
          );
        })}
      </Masonry>
    </>
  );
};

export default PortfolioGridRandom;
