import Link from "next/link";
import InstagramCarousel from "./instagramCarousel";

const Footer = ({ instagramImagesResponse }) => {
  return (
    <>
      <InstagramCarousel images={instagramImagesResponse} />
      <div className="px-4 lg:px-20 bg-accent pt-10 pb-4">
        <div className="md:flex">
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(auto,_150px))] gap-4 lg:gap-8 text-center max-w-xl lg:text-left">
            <li>
              <Link href="/"> Home</Link>
            </li>
            <li>
              <Link href="/about"> About</Link>
            </li>
            <li>
              <Link href="/portfolio"> Portfolio</Link>
            </li>
            <li>
              <Link href="/packages"> Packages</Link>
            </li>
            <li>
              <Link href="/contact"> Contact</Link>
            </li>
            <li>
              <Link href="/packages#welcomeguide"> Welcome guide</Link>
            </li>
            <li>
              <Link href="/about#FAQ"> FAQ</Link>
            </li>
            <li>
              <Link href="/book"> Book a shoot</Link>
            </li>
          </ul>
          <div className="m-auto place-items-center grid my-8 md:flex md:w-full md:max-w-sm md:justify-between">
            <div className="flex">
              <a
                href="https://www.instagram.com/amongcreatives/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="max-w-[30px] lg:max-w-[35px] m-2 lg:mr-5"
                  src="/icons/instagram-icon.svg"
                  alt="instagram icon"
                />
              </a>
              <a
                href="https://www.pinterest.com/amongcreatives/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="max-w-[30px] lg:max-w-[35px] m-2"
                  src="/icons/pinterest-icon.svg"
                  alt="Pinterest icon"
                />
              </a>
            </div>
            <div className="mt-6 md:mt-0 cursor-pointer">
              <Link href="/">
                <img
                  className="max-h-[60px] lg:max-h-[70px]"
                  src="/logo-new-among-creatives.svg"
                  alt="Logo among creatives photography"
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-sm md:mt-7 opacity-70">
          Among Creatives © {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;
