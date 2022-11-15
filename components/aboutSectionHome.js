import Image from "next/image";
import Divider from "./divider";
import SecondaryButton from "./secondaryButton";

const AboutSectionHome = () => {
  return (
    <>
      <div className="px-4 py-10 md:flex xl:px-40 md:items-center md:text-center md:justify-center">
        <div className="md:w-6/12 md:p-10 md:grid md:place-items-center">
          <h2 className="text-4xl lg:text-3xl">
            Hi, I’m Nass, a Fashion and product photographer for sustainable and
            conscious businesses.
          </h2>
          <Divider />
          <p>
            I love creating fresh, minimalistic and clear visuals that will
            boost your sales and get your audience to stop scrolling!
          </p>
          <p>
            I offer creative and thoughtful content that reflects your brand and
            tells your products' stories that set your customer expectation.
          </p>
          {/* <p>I am working remotely, simply send me your products and I’ll photograph them and send them back (as easy as that).
                    </p> */}
          <p className="mb-8 md:mb-5">
            I can’t wait to know more about your lovely business :)
          </p>
          <SecondaryButton link="/contact">Let's work together</SecondaryButton>
        </div>
        <div className="mt-10 md:w-5/12 md:p-8">
          <Image
            className="mb-8 rounded-xl rounded-tr-[30%]"
            src="/homepage/nass-product-photographer-working.jpg"
            alt="nass-product-photographer-working"
            layout="responsive"
            objectFit="cover"
            width="100%"
            height="120vh"
          />
        </div>
      </div>
    </>
  );
};

export default AboutSectionHome;
