import Link from "next/link";

const PrimaryButton = ({ children, link }) => {
    return (
        <>
            <Link href={link}>
                <div className="bg-accent py-3 px-5 my-2 text-[16px] w-fit m-auto cursor-pointer md:text-[18px]">
                    {children}
                </div>
            </Link>
        </>
    );
}

export default PrimaryButton;