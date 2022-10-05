import Link from "next/link";

const PortfolioTitles = ({ category }) => {
    return (
        <div className="pt-0 pb-6 md:mr-4">
            {category && category.data.map((category, idx) => {
                return (
                    <div key={idx} className="w-fit right-0 mr-0 ml-auto hover:cursor-pointer">
                        <Link href={`/portfolio/${category.attributes.path.toString().toLowerCase()}`} >
                            <h2 className='text-right mb-0 hover:brightness-0'>{category.attributes.Category}</h2>
                        </Link>
                        <div className="mt-0 h-[2px] bg-secondary w-auto hover:bg-primary "></div>
                    </div>
                )
            })}
        </div>
    );
}

export default PortfolioTitles;