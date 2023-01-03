import Head from "next/head";
import Image from "next/image";

const Maintenance = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="grid place-items-center h-[100vh] bg-secondary">
        <div>
          <div className="max-w-xl m-auto text-center px-4">
            <h1>Under Maintenance</h1>
            <p>
              Hi, thanks for your visit! The website is currently being updated.
              To contact me, please visit my{" "}
              <a
                className="underline"
                href="http://instagram.com/amongcreatives"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              .
            </p>
          </div>
          <div className="m-auto grid place-items-center mt-20 -mb-20">
            <Image
              className="max-h-[60px] lg:max-h-[70px]"
              src="/logo-new-among-creatives.svg"
              alt="Logo among creatives photography"
              width={"150px"}
              height={"100%"}
              // layout="responsive"
              objectFit="contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
