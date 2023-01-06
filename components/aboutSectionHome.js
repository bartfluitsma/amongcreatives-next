import Image from "next/image";
// import Divider from "./divider";
import SecondaryButton from "./secondaryButton";

const AboutSectionHome = () => {
  return (
    <>
      <div className="px-4 md:px-0 py-10 md:pt-20 md:pb-0 md:flex md:items-center justify-center m-auto">
        <div className="mt-10 md:w-2/5 mb-10 md:mb-20">
          <Image
            className=""
            src="/homepage/woman-on-the-beach-carrying-a-bag-of-fruits-wearing-a-sustainable-bikini.jpg"
            alt="nass-product-photographer-working"
            layout="responsive"
            objectFit="contain"
            width="100%"
            loading="eager"
            height="100"
          />
        </div>
        <div className="md:w-2/5 md:p-10 bg-white md:max-w-2xl">
          <h2 className="text-4xl lg:text-3xl">
            Hi, I’m Nass, a Fashion and product photographer for sustainable and
            conscious businesses. Based in Portugal, travelling between Bali and
            Europe!
          </h2>
          {/* <Divider /> */}
          <p>
            I offer creative and thoughtful content that reflects your brand and
            tells your products' stories that set your customer expectation.
          </p>
          <div className="flex my-7 lg:my-5 pl-2">
            <div className="w-[10px] bg-secondary min-h-full my-4 mr-4"></div>
            <p className="text-lg lg:text-3xl pr-4 lg:pr-0 font-Cormorant">
              "I love creating fresh, minimalistic and clear visuals that will
              boost your sales and get your audience to stop scrolling!"
            </p>
          </div>
          {/* <p>I am working remotely, simply send me your products and I’ll photograph them and send them back (as easy as that).
                    </p> */}
          <p className="mb-8 md:mb-5">
            I can’t wait to know more about your lovely business :)
          </p>
          <SecondaryButton link="/contact">Let's work together</SecondaryButton>
        </div>
      </div>
    </>
  );
};

export default AboutSectionHome;
