import Link from "next/link";

const CategoryCard = ({ data }) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL_BASE;

  return (
    <>
      {data &&
        data.map((category, idx) => {
          return (
            <div key={idx}>
              {console.log(category.attributes.Category)}
              <Link
                href={`${category.attributes.Category.toString().toLowerCase()}/${category.attributes.slug
                  }`}
              >
                <div>
                  {Array.isArray(category.attributes.Thumbnail.data) ? (
                    category.attributes.Thumbnail.data.map((image, i) => {
                      return (
                        <img
                          key={i}
                          src={`${baseUrl}${image.attributes.url}`}
                          alt={image.attributes.alternativeText}
                        />
                      );
                    })
                  ) : (
                    <>
                      <img
                        src={`${baseUrl}${category.attributes.Thumbnail.data.attributes.url}`}
                        alt={
                          category.attributes.Thumbnail.data.attributes
                            .alternativeText
                        }
                      />
                    </>
                  )}
                  <p className="text-xl mb-0 pb-0">
                    {category.attributes.Client}
                  </p>
                  <p className="mt-[-5px] pt-0 text-sm">
                    {category.attributes.Description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default CategoryCard;

//           Array.isArray(item.attributes.Thumbnail.data)
//             ? console.log("it is")
//             : console.log("its not");
