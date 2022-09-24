import Link from "next/link";

const PackageCarouselCard = ({ name, description, image, anchor }) => {
    return (
        <>
            <Link href={`/packages${anchor}`}>
                <div id={anchor} className='w-[250px] m-auto'>
                    <div className="cursor-pointer text-center">
                        <div className={`h-[300px] bg-[url('/${image}')] bg-cover bg-center rounded-lg rounded-t-[50%]`}></div>
                        <h4 className='mb-0'>{name}</h4>
                        <p className='px-1 leading-5'>{description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default PackageCarouselCard;