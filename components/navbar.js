import useMediaQuery from "../helpers/breakpoints";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isBreakpoint = useMediaQuery(980);

  // link styles
  const ActiveLink = `border-b-4 pb-[2px] border-secondary`;
  const LinkStyles = `mx-[.25vw] mb-0 my-4 lg:my-auto py-3 px-[2vw]`;
  const hoverStyles = `hover:border-b-4 hover:border-accent`;

  // change style of menu on click
  const [style, setStyle] = useState(true);
  const changeStyle = () => {
    setStyle(!style);
  };

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
                  className="w-10 z-20"
                  src="/logo-among-creatives-small.svg"
                  alt="Among Creatives logo small"
                  // placeholder="blurred"
                  width={40}
                  height={40}
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

              <li onClick={changeStyle} className={LinkStyles}>
                <Link href="/portfolio">
                  <a
                    className={
                      router.pathname === "/portfolio" ? ActiveLink : null
                    }
                  >
                    Portfolio
                  </a>
                </Link>
              </li>
              <li onClick={changeStyle} className={LinkStyles}>
                <Link href="/packages">
                  <a
                    className={
                      router.pathname === "/packages" ? ActiveLink : null
                    }
                  >
                    Packages
                  </a>
                </Link>
              </li>

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

              <li onClick={changeStyle} className={LinkStyles}>
                <Link href="/book">
                  <a className="bg-accent py-3 px-8 shadow-softShadow">
                    Book now
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <nav className="bg-white py-4 grid px-[4vw]">
            {/* remove place items center when using logo on the side */}

            <div className="flex items-center justify-between">
              <div className="mb-0 my-4 lg:my-auto hidden lg:block">
                <Link href="/">
                  <a>
                    <img
                      src="/logo-new-among-creatives.svg"
                      alt="Among Creatives logo"
                      // placeholder="blurred"
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
                  <Link href="/portfolio">
                    <a
                      className={
                        router.pathname === "/portfolio" ? ActiveLink : null
                      }
                    >
                      Portfolio
                    </a>
                  </Link>
                </li>

                {/* <ul className="mx-0 mb-0 my-4 lg:my-auto lg:mt-2 hidden lg:block">
                                    <Link href='/'>
                                        <a>
                                            <Image
                                                src='/logo-new-among-creatives.svg'
                                                alt='Among Creatives logo'
                                                // placeholder="blurred"
                                                width={200}
                                                height={70}
                                            />
                                        </a>
                                    </Link>
                                </ul> */}

                <li className={LinkStyles}>
                  <Link href="/packages">
                    <a
                      className={
                        router.pathname === "/packages" ? ActiveLink : null
                      }
                    >
                      Packages
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

                <li className={LinkStyles}>
                  <Link href="/book">
                    <a className="bg-accent py-3 px-8 shadow-softShadow">
                      Book now
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
