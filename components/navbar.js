import useMediaQuery from "../helpers/breakpoints";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isBreakpoint = useMediaQuery(980);

  // set submenu dropdown
  const [subMenu, setSubMenu] = useState(false);
  const openSubMenu = () => {
    setSubMenu(true);
  };

  const closeSubMenu = () => {
    setSubMenu(false);
  };

  const handleSubmenuMobile = () => {
    closeSubMenu(false);
    changeStyle(false);
  };

  // link styles
  const ActiveLink = `border-b-4 pb-[2px] border-secondary`;
  const LinkStyles = `mx-[.25vw] mb-0 my-4 lg:my-auto py-3 px-[2vw]`;
  const hoverStyles = `hover:border-b-4 hover:border-accent`;

  // change style of menu on click
  const [style, setStyle] = useState(true);
  const changeStyle = () => {
    setStyle(!style);
  };

  const subMenuItems = [
    {
      link: "/portfolio/fashions",
      name: "Fashion",
    },
    {
      link: "/portfolio/products",
      name: "Products",
    },
    // {
    //   link: "/portfolio/brandings",
    //   name: "Branding",
    // },
  ];

  return (
    <>
      {/* check if menu is for mobile or dekstop */}
      {isBreakpoint ? (
        <>
          <nav className="lg:bg-white grid place-content-center lg:py-5">
            <button
              className="absolute left-4 top-7 z-20 lg:hidden"
              onClick={changeStyle}
              onKeyDown={changeStyle}
            >
              <div
                className={
                  style
                    ? "h-[2px] w-8 bg-darkColor ease-in duration-300 transition-transform"
                    : "h-[2px] w-8 bg-darkColor origin-center rotate-45 translate-y-[6px] ease-in duration-300 transition-transform"
                }
              ></div>
              <div
                className={
                  style
                    ? "h-[2px] my-[4px] w-8 bg-darkColor transition-colors ease-out duration-300"
                    : "h-[2px] my-[4px] w-8 ease-out duration-300 transition-colors "
                }
              ></div>
              <div
                className={
                  style
                    ? "h-[2px] w-8 bg-darkColor ease-in duration-300 transition-transform"
                    : "h-[2px] w-8 bg-darkColor origin-center -rotate-45 -translate-y-[6px] ease-in duration-300 transition-transform"
                }
              ></div>
            </button>
            <Link href="/">
              <a className="absolute right-4 top-4 lg:top-0 lg:hidden">
                <img
                  className="w-20 z-20"
                  src="/logo-new-among-creatives.svg"
                  alt="Among Creatives logo"
                  // placeholder="blurred"
                  width={80}
                  height={50}
                />
              </a>
            </Link>
            <ul
              className={
                style
                  ? "h-screen lg:h-10 absolute lg:relative pt-[40%] sm:pt-32 lg:pt-0 bg-white lg:bg-transparent w-full lg:w-auto z-10 text-center lg:flex lg:justify-between ease-in duration-300 -translate-x-full transition-transform lg:translate-x-0"
                  : "pt-[40%] ease-in duration-300 h-screen absolute transition-transform bg-white w-full z-10 text-center lg:flex sm:pt-32 min-h-[500px] lg:justify-between"
              }
            >
              <li onClick={changeStyle} className={LinkStyles}>
                <Link className={hoverStyles} href="/">
                  <a className={router.pathname === "/" ? ActiveLink : null}>
                    Home
                  </a>
                </Link>
              </li>

              <li onClick={changeStyle} className={LinkStyles}>
                <Link href="/about">
                  <a
                    className={router.pathname === "/about" ? ActiveLink : null}
                  >
                    About
                  </a>
                </Link>
              </li>

              {subMenu ? (
                <li onClick={handleSubmenuMobile} className={LinkStyles}>
                  <Link href="/portfolio">
                    <a
                      className={
                        router.pathname === "/portfolio" ? ActiveLink : null
                      }
                    >
                      Portfolio
                    </a>
                  </Link>
                  <ul className=" bg-white w-fit m-auto -mb-7 p-2">
                    {subMenuItems.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          onClick={handleSubmenuMobile}
                          className="mb-4 first-of-type:mt-2 text-sm font-bold"
                        >
                          <Link className="font-bold" href={item.link}>
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ) : (
                <li
                  onClick={openSubMenu}
                  className="mx-[.25vw] mb-0 my-4 lg:my-auto py-3 px-[2vw] text-lg cursor-pointer"
                >
                  Portfolio
                </li>
              )}
              <li onClick={changeStyle} className={LinkStyles}>
                <Link href="/contact">
                  <a
                    className={
                      router.pathname === "/contact" ? ActiveLink : null
                    }
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <nav className="bg-white py-4 grid px-[4vw]">
            <div className="flex items-center justify-between">
              <div className="mb-0 my-4 lg:my-auto hidden lg:block">
                <Link href="/">
                  <a>
                    <img
                      src="/logo-new-among-creatives.svg"
                      alt="Among Creatives logo"
                      width={120}
                      height={30}
                      className="py-3"
                    />
                  </a>
                </Link>
              </div>
              <ul
                className={
                  " bg-white lg:bg-transparent w-full lg:w-auto lg:flex lg:justify-between lg:translate-x-0"
                }
              >
                <li className={LinkStyles}>
                  <Link className={hoverStyles} href="/">
                    <a className={router.pathname === "/" ? ActiveLink : null}>
                      Home
                    </a>
                  </Link>
                </li>

                <li
                  onMouseOver={openSubMenu}
                  onMouseLeave={closeSubMenu}
                  className={`relative ${LinkStyles}`}
                >
                  <Link href="/portfolio">
                    <a
                      className={
                        router.pathname === "/portfolio" ? ActiveLink : null
                      }
                    >
                      Portfolio
                    </a>
                  </Link>
                  {subMenu ? (
                    <ul className="-mt-[3px] absolute bg-white w-full shadow-softShadow p-2 border-t-4 border-t-secondary">
                      {subMenuItems.map((item, idx) => {
                        return (
                          <li key={idx} className="mb-2 first-of-type:pt-2">
                            <Link href={item.link}>{item.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>

                <li className={LinkStyles}>
                  <Link href="/about">
                    <a
                      className={
                        router.pathname === "/about" ? ActiveLink : null
                      }
                    >
                      About
                    </a>
                  </Link>
                </li>

                <li className={LinkStyles}>
                  <Link href="/contact">
                    <a
                      className={
                        router.pathname === "/contact" ? ActiveLink : null
                      }
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
