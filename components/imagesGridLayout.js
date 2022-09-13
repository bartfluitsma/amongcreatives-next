import Link from "next/link";
import SecondaryButton from "./secondaryButton";

const ImagesGridLayout = () => {
    return (
        <>
            <div className="px-4 pt-20 pb-10 md:pt-28">
                <Link href="/portfolio">
                    <div className="grid grid-cols-gridImageTemplateColumn grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-2 cursor-pointer max-w-5xl m-auto">
                        <div className="hover:brightness-105 bg-cover bg-center bg-[url('/Woman-wearing-slow-fashion-clothing-on-beach.jpg')] min-h-[250px] sm:min-h-[350px] md:min-h-[320px] h-full min-w-full"></div>
                        <div className="hover:brightness-105 bg-cover bg-center bg-[url('/ring-in-bohemian-setting.jpg')]  h-full min-w-full"></div>
                        <div className="hover:brightness-105 bg-cover bg-center bg-[url('/face-oil-organic-product.jpg')] h-full min-w-full col-span-2"></div>
                        <div className="hover:brightness-105 bg-cover bg-center bg-[url('/Women-at-the-beach-wearing-sustainable-jewelry.jpg')] h-full min-w-full col-span-2 row-span-2 md:col-span-2 md:col-start-3 md:col-end-5 md:row-span-full"></div>
                    </div>
                </Link>
                <div className="pt-10 grid place-items-center">
                    <SecondaryButton link="/portfolio">View portfolio</SecondaryButton>
                </div>
            </div>
        </>
    );
}

export default ImagesGridLayout;