import PortfolioImageSlider from "../portfolio/portfolioImageSlider";
import PortfolioTitles from "../portfolio/portfolioTitles";
import VerticalTitle from "../verticalTitle";
import SkeletonCard from "./skeletonCard";

const PortfolioTitlePageSkeleton = () => {
  return (
    <>
      <div className="px-4 mt-24 lg:mt-4 lg:px-20 -z-50 animate-pulse">
        <div className="md:flex md:justify-between md:items-center">
          <div className="order-2">
            <div className="w-fit right-0 mr-0 ml-auto hover:cursor-pointer mb-10 md:mb-0">
              <div className="w-[200px] h-10 bg-gray-100 rounded mb-2"></div>
              <div className="w-[200px] h-10 bg-gray-100 rounded mb-2"></div>
              <div className="w-[200px] h-10 bg-gray-100 rounded mb-2"></div>
            </div>
          </div>
          <div className="flex order-1">
            <div>
              <div className="h-[300px] w-[40px] bg-gray-100"></div>
            </div>
            <div className="w-full overflow-hidden">
              <div className="ml-4 w-full md:max-w-[65vw] lg:max-w-[55vw] xl:max-w-[55vw] ">
                <div className="bg-red h-[50vh] w-[60vw] bg-gray-100 "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 max-w-3xl lg:pl-14">
          <div className="w-[200px] md:w-[400px]">
            <div className="w-[300px] md:w-[400px] h-20 bg-gray-100 rounded col-span-2 mb-2"></div>
            <div className="w-[200px] h-4 bg-gray-100 rounded mb-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioTitlePageSkeleton;
