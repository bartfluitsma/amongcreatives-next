import Image from "next/image";
import useMediaQuery from "../../helpers/breakpoints";

const PortfolioGridBasicLayout = ({ data }) => {
  const isBreakpoint = useMediaQuery(600);

  return (
    <>
      {isBreakpoint ? (
        <div className="grid grid-cols-3 gap-2 ml-3 md:mx-4">
          {!data.images.data < 1
            ? data.images.data.map((image, idx) => {
                if (
                  idx === 0 ||
                  idx === 7 ||
                  idx === 9 ||
                  idx === 12 ||
                  idx === 15
                ) {
                  return (
                    // <Image className='row-span-2 col-span-2' key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                    <Image
                      priority={true}
                      className="row-span-2 col-span-2"
                      key={idx}
                      src={`${image.attributes.url}`}
                      alt={image.attributes.alternativeText}
                    />
                  );
                } else if (idx >= 18) {
                  return (
                    // <Image className='row-span-2 col-span-3' key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                    <Image
                      className="row-span-2 col-span-3"
                      priority={true}
                      key={idx}
                      src={`${image.attributes.url}`}
                      alt={image.attributes.alternativeText}
                    />
                  );
                } else {
                  return (
                    // <Image key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                    <Image
                      priority={true}
                      key={idx}
                      src={`${image.attributes.url}`}
                      alt={image.attributes.alternativeText}
                    />
                  );
                }
              })
            : null}
        </div>
      ) : (
        <div className="mx-4 ml-auto mr-auto grid grid-cols-4 gap-2 max-w-4xl m-auto">
          {!data.images.data < 1
            ? data.images.data.map((image, idx) => {
                if (
                  idx === 0 ||
                  idx === 3 ||
                  idx === 4 ||
                  idx === 9 ||
                  idx === 10 ||
                  idx === 13 ||
                  idx === 14 ||
                  idx === 17 ||
                  idx === 18
                ) {
                  return (
                    // <Image className='row-span-2 col-span-2' key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                    <Image
                      className="row-span-2 col-span-2"
                      priority={true}
                      key={idx}
                      src={`${image.attributes.url}`}
                      alt={image.attributes.alternativeText}
                    />
                  );
                } else if (idx >= 21) {
                  return (
                    // <Image className='row-span-2 col-span-2' key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                    <Image
                      className="row-span-2 col-span-2"
                      priority={true}
                      key={idx}
                      src={`${image.attributes.url}`}
                      alt={image.attributes.alternativeText}
                    />
                  );
                } else {
                  return (
                    // <Image key={idx} src={`${baseUrl}${image.attributes.url}`} alt={image.attributes.alternativeText} />
                    <Image
                      priority={true}
                      key={idx}
                      src={`${image.attributes.url}`}
                      alt={image.attributes.alternativeText}
                    />
                  );
                }
              })
            : null}
        </div>
      )}
    </>
  );
};

export default PortfolioGridBasicLayout;
