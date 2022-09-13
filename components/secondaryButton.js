import Link from "next/link";

const SecondaryButton = ({ children, link }) => {
    return (
        <>
            <Link href={link}>
                <div className="bg-transparent py-3 px-8 my-4 w-fit cursor-pointer border-2 border-darkColor hover:bg-darkColor hover:text-white btn">
                    {children}
                </div>
            </Link>
        </>
    );
}

export default SecondaryButton;