import Image from "next/image";
import { packageDetails } from "../../data/index";

const PackagesDetails = () => {
  return (
    <>
      <div
        id="packageDetails"
        className="flex flex-col mx-4 mt-10 max-w-3xl md:m-auto md:my-10"
      >
        <div className="flex flex-col">
          {packageDetails.map((packageDetail, idx) => {
            return !packageDetail.reverse ? (
              <div
                key={idx}
                id={packageDetail.iden}
                className="grid sm:flex items-center  my-5"
              >
                <div>
                  <Image
                    className="rounded-t-[300px] rounded-b-[50px] sm:max-h-80 md:max-h-[300px] object-cover w-full h-auto md:w-[15vw] md:min-w-[250px] sm:pr-3"
                    src={packageDetail.url}
                    alt={packageDetail.altText}
                  />
                </div>
                <div className="md:ml-10">
                  <h3 className="mb-2">{packageDetail.name}</h3>
                  <p className="mt-0 pt-0">{packageDetail.description}</p>
                  <p className="font-semibold">{packageDetail.amount}</p>
                </div>
              </div>
            ) : (
              <div
                key={idx}
                id={packageDetail.iden}
                className="grid sm:flex items-center justify-between my-5"
              >
                <div className="order-2 sm-order-1 pr-10">
                  <h3 className="mb-2">{packageDetail.name}</h3>
                  <p className="mt-0 pt-0">{packageDetail.description}</p>
                  <p className="font-semibold">{packageDetail.amount}</p>
                </div>
                <div className="order-1 sm:order-2">
                  <Image
                    className="rounded-t-[300px] rounded-b-[50px] max-h-[400px] md:max-h-[300px]  object-cover w-full h-auto md:w-[15vw] md:min-w-[250px] sm:pl-3"
                    src={packageDetail.url}
                    alt={packageDetail.altText}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PackagesDetails;
