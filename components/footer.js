import Image from "next/image";
import Link from "next/link";
import InstagramCarousel from "./instagramCarousel";

const footerItems = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/portfolio",
    name: "Portfolio",
  },
  // {
  //   link: "/packages",
  //   name: "Packages",
  // },
  {
    link: "/contact",
    name: "Contact",
  },
  // {
  //   link: "/packages#welcomeguide",
  //   name: "Welcome guide",
  // },
  {
    link: "/about#faq",
    name: "FAQ",
  },
];

const Footer = ({ instagramImagesResponse }) => {
  return (
    <>
      <InstagramCarousel images={instagramImagesResponse} />
      <div className="px-4 lg:px-20 bg-accent pt-10 pb-4">
        <div className="md:flex">
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(auto,_150px))] gap-4 lg:gap-0 text-center max-w-xl lg:text-left lg:ml-[7vw]">
            {footerItems.map((item, idx) => {
              return (
                <li key={idx} className="text-base">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="m-auto place-items-center grid my-8 md:flex md:w-full md:max-w-sm md:justify-between">
            <div className="flex">
              <a
                href="https://www.instagram.com/amongcreatives/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="max-w-[30px] lg:max-w-[35px] m-2 lg:mr-5"
                  src="/icons/instagram-icon.svg"
                  alt="instagram icon"
                  width={"40"}
                  height={"40"}
                  loading="eager"
                />
              </a>
              <a
                href="https://www.pinterest.com/amongcreatives/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ml-3">
                  <Image
                    className="max-w-[30px] lg:max-w-[35px] m-2"
                    src="/icons/pinterest-icon.svg"
                    alt="Pinterest icon"
                    width={"40"}
                    height={"40"}
                    loading="eager"
                  />
                </div>
              </a>
            </div>
            <div className="mt-6 md:mt-0 cursor-pointer">
              <Link href="/">
                <Image
                  className="max-h-[60px] lg:max-h-[70px]"
                  src="/logo-new-among-creatives.svg"
                  alt="Logo among creatives photography"
                  width={"150px"}
                  height={"100%"}
                  // layout="responsive"
                  objectFit="contain"
                  loading="eager"
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-sm md:mt-7 opacity-70">
          Among Creatives © {new Date().getFullYear()} | Development by{" "}
          <a
            href="http://bartfluitsma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            bartfluitsma {/* nomadscode */}
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
