import Image from "next/image";
import Link from "next/link";

const PackageCarouselCard = ({
  name,
  description,
  imageUrl,
  altText,
  anchor,
}) => {
  return (
    <>
      <Link href={`/packages${anchor}`}>
        <div id={anchor} className="w-[250px] m-auto">
          <div className="cursor-pointer text-center">
            {/* <div
              className={`h-[300px] w-[100%] bg-accent  rounded-lg rounded-t-[50%] overflow-hidden`}
            > */}
            <Image
              className="rounded-2xl rounded-t-[300px] max-h-auto w-full"
              src={imageUrl}
              layout="responsive"
              objectFit="cover"
              width="100%"
              height="120px"
              loading="eager"
              alt={altText}
            />
          </div>
          <div className="text-center">
            <h4 className="mb-0">{name}</h4>
            <p className="px-1 leading-5 text-sm">{description}</p>
          </div>
          {/* </div> */}
        </div>
      </Link>
    </>
  );
};

export default PackageCarouselCard;
