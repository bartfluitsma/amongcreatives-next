import VerticalText from "../verticalText";

const ClientPageSkeleton = () => {
  return (
    <>
      <div className="flex px-4 mt-24 lg:mt-12 lg:px-20 animate-pulse">
        <div>
          <div className="h-[300px] w-[40px] bg-gray-100"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 ml-3 md:mx-auto h-[100vh] w-[100vw] max-w-3xl">
          <div className="w-full col-span-2 row-span-2 h-full bg-gray-100 rounded"></div>
          <div className="w-full">
            <div className="h-full bg-gray-100 rounded col-span-2 mb-2"></div>
          </div>
          <div className="w-full">
            <div className="h-full bg-gray-100 rounded col-span-2 mb-2"></div>
          </div>
          <div className="w-full row-span-2">
            <div className="h-full bg-gray-100 rounded mb-2"></div>
          </div>
          <div className="h-full col-span-2 row-span-2 bg-gray-100 rounded mb-2"></div>
        </div>
      </div>
    </>
  );
};

export default ClientPageSkeleton;
