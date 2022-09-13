import Link from "next/link";

const PrimaryButton = ({ children, link }) => {
    return (
        <>
            <Link href={link}>
                <div className="bg-accent py-3 px-8 my-2 w-fit m-auto cursor-pointer shadow-softShadow btn">
                    {children}
                </div>
            </Link>
        </>
    );
}

export default PrimaryButton;