import PortfolioImagesGridCard from "./portfolioImagesGridCard";

const PortfolioGridBasicLayout = ({ data }) => {
  return (
    <>
      <div className="pl-4 lg:pl-0 mx-4 ml-auto mr-auto grid grid-cols-6 gap-2 max-w-4xl m-auto">
        {data.images.data < 1
          ? null
          : data.images.data.map((image, idx) => {
              if (idx === 0 || idx === 1 || idx === 3 || idx === 4) {
                return (
                  <PortfolioImagesGridCard
                    classCard={"row-span-2 col-span-3"}
                    data={image}
                    key={idx}
                  />
                );
              } else if (idx === 2 || idx === 7) {
                return (
                  <PortfolioImagesGridCard
                    classCard={
                      "row-span-1 col-span-full max-h-[200px] sm:max-h-[250px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px] object-cover"
                    }
                    data={image}
                    key={idx}
                  />
                );
              } else if (idx === 5) {
                return (
                  <PortfolioImagesGridCard
                    classCard={"row-span-1 col-span-3 "}
                    data={image}
                    key={idx}
                  />
                );
              } else if (idx === 6) {
                return (
                  <PortfolioImagesGridCard
                    classCard={"row-span-1 col-span-3"}
                    data={image}
                    key={idx}
                  />
                );
              } else if (
                (data.images.data.length > 10 && idx === 8) ||
                idx === 9 ||
                idx === 10
              ) {
                return (
                  <PortfolioImagesGridCard
                    classCard={"row-span-1 col-span-2"}
                    data={image}
                    key={idx}
                  />
                );
              } else {
                return (
                  <PortfolioImagesGridCard
                    classCard={"row-span-2 col-span-3"}
                    data={image}
                    key={idx}
                  />
                );
              }
            })}
      </div>
    </>
  );
};

export default PortfolioGridBasicLayout;
