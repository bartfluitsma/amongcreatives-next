import Link from "next/link";

const SecondaryButton = ({ children, link }) => {
    return (
        <>
            <Link href={link}>
                <div className="bg-transparent py-3 px-5 my-4 text-[16px] w-fit cursor-pointer md:text-[18px] border-2 border-darkColor hover:bg-darkColor hover:text-white">
                    {children}
                </div>
            </Link>
        </>
    );
}

export default SecondaryButton;