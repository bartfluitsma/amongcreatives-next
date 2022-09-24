import { packageDetails } from "../../data/index";

const PackagesDetails = () => {
  return (
    <>
      <div className="flex flex-col lg:items-center md:flex-row mx-4 mt-10 max-w-2xl md:m-auto">
        <div className="flex flex-col justify-between">
          {packageDetails.map((packageDetail) => {
            return (
              <>
                <div
                  id={packageDetail.iden}
                  className="sm:flex items-center my-10"
                >
                  <div>
                    <img
                      className="rounded-t-[300px] object-cover w-full h-60 md:h-auto md:w-[15vw] md:min-w-[250px] pr-3"
                      src={packageDetail.url}
                      alt=""
                    />
                  </div>
                  <div className="sm:ml-10">
                    <h3 className="mb-2">{packageDetail.name}</h3>
                    <p className="mt-0 pt-0">{packageDetail.description}</p>
                    <p className="font-semibold">{packageDetail.amount}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PackagesDetails;
