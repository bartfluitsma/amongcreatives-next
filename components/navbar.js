import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const Navbar = () => {

    // link styles
    const ActiveLink = {
        borderBottom: `4px solid #d5d5c9`,
    }
    const LinkStyles = `mx-[.25vw] mb-0 my-4 lg:my-auto py-3 px-[2vw] font-semibold`
    const hoverStyles = `hover:border-b-4 hover:border-accent`

    // change style of menu on click
    const [style, setStyle] = useState(true)
    const changeStyle = () => {
        setStyle(!style)
    }

    return (
        <>
            <nav className='lg:bg-white grid place-content-center lg:pt-7 lg:pb-10'>
                {/* mobile menu button */}
                <button className='absolute left-6 top-7 z-20 lg:hidden' onClick={changeStyle} onKeyDown={changeStyle}>
                    <div className={style
                        ? 'h-[2px] w-8 bg-darkColor ease-in duration-300 transition-transform'
                        : 'h-[2px] w-8 bg-darkColor origin-center rotate-45 translate-y-[6px] ease-in duration-300 transition-transform'}></div>
                    <div className={style
                        ? 'h-[2px] my-[4px] w-8 bg-darkColor transition-colors ease-out duration-300'
                        : 'h-[2px] my-[4px] w-8 ease-out duration-300 transition-colors '}></div>
                    <div className={style
                        ? 'h-[2px] w-8 bg-darkColor ease-in duration-300 transition-transform'
                        : 'h-[2px] w-8 bg-darkColor origin-center -rotate-45 -translate-y-[6px] ease-in duration-300 transition-transform'}></div>
                </button>

                <Link href='/'>
                    <a className='absolute right-5 top-4 lg:top-0 lg:hidden'>
                        <Image className='w-10 z-20'
                            src='/logo-among-creatives-small.svg'
                            alt='Among Creatives logo small'
                            // placeholder="blurred"
                            width={40}
                            height={40}
                        />
                    </a>
                </Link>

                <ul className={style ? 'h-screen lg:h-10 absolute lg:relative pt-[40%] sm:pt-32 lg:pt-0 bg-white lg:bg-transparent w-full lg:w-auto z-10 text-center lg:flex lg:justify-between ease-in duration-300 -translate-x-full transition-transform lg:translate-x-0' : 'pt-[40%] ease-in duration-300 h-screen absolute transition-transform bg-white w-full z-10 text-center lg:flex sm:pt-32 min-h-[500px] lg:justify-between'}>
                    <li className={LinkStyles}><Link className={hoverStyles} href="/" activeStyle={ActiveLink}>Home</Link></li>
                    <li className={LinkStyles}><Link className={hoverStyles} href='/about' activeStyle={ActiveLink}>About</Link></li>
                    <li className={LinkStyles}><Link className={hoverStyles} href='/portfolio/' activeStyle={ActiveLink}>Portfolio</Link></li>
                    <li className="mx-6 mb-0 my-4 lg:my-auto hidden lg:block">
                        <Link href='/'>
                            <a>
                                <Image
                                    src='/logo-among-creatives.svg'
                                    alt='Among Creatives logo'
                                    // placeholder="blurred"
                                    width='120%'
                                    height={55}
                                />
                            </a>
                        </Link>
                    </li>
                    <li className={LinkStyles}><Link className={hoverStyles} href='/packages' activeStyle={ActiveLink}>Packages</Link></li>
                    <li className={LinkStyles}><Link className={hoverStyles} href='/contact' activeStyle={ActiveLink}>Contact</Link></li>
                    <li className={LinkStyles}>
                        <Link href='/book'>
                            <a className="bg-accent py-3 px-8 shadow-softShadow">Book a shoot</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar