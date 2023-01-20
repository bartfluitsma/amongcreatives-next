import Image from "next/image";
import Divider from "./divider";
import SecondaryButton from "./secondaryButton";

const AboutSectionAbout = () => {
  return (
    <>
      <div className="px-4 py-10 mt-20 lg:mt-0 lg:pt-0 md:flex xl:px-32 md:items-center md:justify-center">
        <div className="md:w-6/12 md:p-10">
          <div className="mb-8 md:mb-10">
            <p>Hi, I'm Nass!</p>
            <p>
              I’m a Fashion, lifestyle and product photographer for sustainable
              and conscious businesses between Bali and Europe.
            </p>
            <p>
              I help wonderful brands to grow their online presence and visual
              identity, whether it is for your social media or your websites.
            </p>
            <div className="flex my-7 lg:my-5 pl-2">
              <div className="w-[10px] bg-secondary min-h-full my-4 mr-4"></div>
              <p className="text-lg lg:text-3xl pr-4 lg:pr-0 font-Cormorant">
                “My purpose is to help slow fashion, ethical, and conscious
                businesses to thrive with compelling visuals and expand their
                message to as many customers as possible!”
              </p>
            </div>
            <p>
              I believe that doing business should not be at the cost of our
              planet, people, and animals. That is why I work on projects with
              equal value, love and shared vision.
            </p>
            <p>Let's work together and get your message out there!</p>
          </div>
          <SecondaryButton link="/contact">Contact me</SecondaryButton>
        </div>
        <div className="mt-10 md:w-5/12 md:p-8 -z-10">
          <Image
            // className="mb-8 rounded-xl rounded-tr-[30%]"
            className=""
            src="/photographer-for-sustainable-businesses-nass-behind-the-camera.jpg"
            alt="Photographer for sustainable businesses Nass behind the camera."
            layout="responsive"
            objectFit="cover"
            width="100%"
            height="125vh"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default AboutSectionAbout;
