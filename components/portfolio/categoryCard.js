import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ data }) => {
  return (
    <>
      {data &&
        data[0].attributes.clients.map((client, idx) => (
          <div key={idx} className="cursor-pointer">
            <Link
              href={`${data[0].attributes.path.toString().toLowerCase()}/${
                client.slug
              }`}
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
                <p className="mt-[-5px] pt-0 text-sm">{client.description}</p>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default CategoryCard;
