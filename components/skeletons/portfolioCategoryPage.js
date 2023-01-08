import SkeletonCard from "./skeletonCard";

const PortfolioCategorySkeleton = () => {
  return (
    <>
      <div className="flex px-4 mt-24 lg:mt-12 lg:px-20 animate-pulse">
        <div>
          <div className="h-[300px] w-[40px] bg-gray-100"></div>
        </div>
        <div className="ml-auto grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-4 lg:gap-8 lg:ml-10 max-w-[82vw] ">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </>
  );
};

export default PortfolioCategorySkeleton;
