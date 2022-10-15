import Link from "next/link";

const CategoryCard = ({ data }) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL_BASE;

  return (
    <>
      {data &&
        data[0].attributes.clients.map((client, idx) => (
          <div key={idx}>
            <Link
              href={`${data[0].attributes.path
                .toString()
                .toLowerCase()}/${client.slug
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
            >
              <div>
                {console.log('client slug', client.slug)}
                <img
                  // key={i}
                  // src={`${baseUrl}${client.thumbnail.data.attributes.url}`}
                  src={`${client.thumbnail.data.attributes.url}`}
                  alt={client.thumbnail.data.attributes.alternativeText}
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