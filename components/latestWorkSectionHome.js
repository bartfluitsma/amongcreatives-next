import { useEffect, useState } from "react";
import PortfolioCategorySkeleton from "../components/skeletons/portfolioCategoryPage";
import Link from "next/link";
import Image from "next/image";
import SecondaryButton from "./secondaryButton";

const LatestWorkSectionHome = ({ category }) => {
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
          <div className="px-4 mt-24 lg:mt-12 lg:px-20">
            <div>
              <h3 className="text-center pb-4">My latest work</h3>
            </div>
            <div className="mx-auto grid grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] gap-4 lg:gap-8 max-w-5xl mb-10">
              {category.category.data.map((category) =>
                category.attributes.Category === "Branding"
                  ? null
                  : category.attributes.clients.map((client, idx) => (
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
                    ))
              )}
            </div>
            <div className="w-full grid place-items-center">
              <SecondaryButton link="/portfolio">
                View portfolio
              </SecondaryButton>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LatestWorkSectionHome;
