import SkeletonCard from "./skeletonCard";

const PortfolioCategorySkeletonHome = () => {
  return (
    <>
      <div className="h-[40px] w-[260px] bg-gray-100 m-auto mt-20 mb-10 lg:mb-0"></div>
      <div className="flex px-4 lg:mt-12 lg:px-20 animate-pulse mx-auto">
        <div className="m-auto md:ml-auto grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-4 lg:gap-8 lg:ml-32 max-w-[82vw] ">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
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

export default PortfolioCategorySkeletonHome;
