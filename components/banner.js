const Banner = ({ children }) => {
  return (
    <>
      {/* <div className="bg-[url('/dried-flower-background.png')] bg-cover bg-center"> */}
      <div className="">
        <p className="text-[1.8em] lg:text-[2.2em] leading-8 lg:leading-10 px-4 mb-10 mt-5 md:py-20 lg:py-16 text-center max-w-5xl m-auto font-Cormorant">
          {children}
        </p>
      </div>
    </>
  );
};

export default Banner;
