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
              and conscious businesses worldwide.
            </p>
            <p>
              I help wonderful brands to grow their online presence and visual
              identity, whether it is for your social media or your websites.
            </p>
            <div className="flex my-7 lg:my-5 pl-2">
              <div className="w-[10px] bg-secondary min-h-full my-4 mr-4"></div>
              <p className="text-lg lg:text-3xl pr-4 lg:pr-0 font-Cormorant">
                "I love being involved in every step of the creative process
                capturing the personality of your brand and get you connected
                with your audience!"
              </p>
            </div>
            <p>
              We will review together your vision to create awesome, fresh &amp;
              natural content that reflects your brands and help you thrive!
            </p>
            <p>Looking for engaging visuals?</p>
            <p>Fair-tastic, let's have a chat!</p>
          </div>
          <SecondaryButton link="/contact">Contact me</SecondaryButton>
        </div>
        <div className="mt-10 md:w-5/12 md:p-8">
          <Image
            className="mb-8 rounded-xl rounded-tr-[30%]"
            src="/Smiling product photographer Nass sitting outside.jpg"
            alt="Smiling product photographer Nass sitting outside"
            layout="responsive"
            objectFit="cover"
            width="100%"
            height="125vh"
          />
        </div>
      </div>
    </>
  );
};

export default AboutSectionAbout;
