import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SecondaryButton from "./secondaryButton";
import PortfolioCategorySkeleton from "./skeletons/portfolioCategoryPage";

const LatestWorkSectionHomePortfolio = ({ category }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <>
      {loading ? (
        <PortfolioCategorySkeleton />
      ) : (
        <>
          <section className="px-10">
            <div className=" px-4 md:px-10 mt-10 lg:mt-12 m-auto items-start">
              <h2 className="[writing-mode:vertical-lr] [-webkit-writing-mode: vertical-lr] [-ms-writing-mode: vertical-lr] rotate-180 text-center absolute left-[2vw] xl:left-[7vw]">
                {category && category.data[0].attributes.Category}
              </h2>
              <div className="ml-auto grid grid-cols-[repeat(auto-fit,_minmax(220px,1fr))] gap-4 lg:gap-8 lg:ml-10">
                {category.data.map((category) =>
                  category.attributes.clients.map((client, idx) =>
                    idx === 1 || idx === 2 || idx === 4 || idx === 6 ? (
                      <div key={idx} className="cursor-pointer">
                        <Link
                          href={`/portfolio/${category.attributes.path
                            .toString()
                            .toLowerCase()}/${client.slug}`}
                        >
                          <div>
                            <Image
                              priority
                              src={`${client.thumbnail.data.attributes.url}`}
                              alt={
                                client.thumbnail.data.attributes.alternativeText
                              }
                              layout="responsive"
                              objectFit="cover"
                              width="100%"
                              height="120px"
                              loading="eager"
                              className="-z-10"
                            />
                            <p className="text-xl mb-0 pb-0">{client.name}</p>
                            <p className="mt-[-5px] pt-0 text-sm">
                              {client.description}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ) : null
                  )
                )}
              </div>
            </div>
            <div className="ml-auto mr-0 px-20 mt-6">
              <SecondaryButton link="/portfolio/fashions">
                See more fashion
              </SecondaryButton>
            </div>
          </section>
          {/* products */}
          <section className="px-10 pt-4">
            <div className=" px-4 md:px-10 mt-24 lg:mt-12 m-auto items-start">
              <h2 className="[writing-mode:vertical-lr] [-webkit-writing-mode: vertical-lr] [-ms-writing-mode: vertical-lr] rotate-180 text-center absolute left-[2vw] xl:left-[7vw]">
                {category && category.data[1].attributes.Category}
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,0.22fr))] gap-4 lg:gap-8 pl-10">
                {category.data[1].attributes.clients.map((client, idx) => (
                  <div key={idx} className="cursor-pointer self-end">
                    <Link
                      href={`/portfolio/${category.data[1].attributes.path
                        .toString()
                        .toLowerCase()}/${client.slug}`}
                    >
                      <div>
                        <Image
                          priority
                          src={`${client.thumbnail.data.attributes.url}`}
                          alt={client.thumbnail.data.attributes.alternativeText}
                          layout="responsive"
                          objectFit="cover"
                          width="100%"
                          height="120px"
                          loading="eager"
                          className="-z-10"
                        />
                        <p className="text-xl mb-0 pb-0">{client.name}</p>
                        <p className="mt-[-5px] pt-0 text-sm">
                          {client.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="ml-auto mr-0 pr-10 mt-6 pl-20">
              <SecondaryButton link="/portfolio/products">
                View products portfolio
              </SecondaryButton>
            </div> */}
          </section>
        </>
      )}
    </>
  );
};

export default LatestWorkSectionHomePortfolio;
