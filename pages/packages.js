import VerticalText from "../components/verticalTitle";
import SecondaryButton from "../components/secondaryButton";
import Divider from "../components/divider";
import BaseInfoPackages from "../components/packages/baseInfoPackages";
import PackagesDetails from "../components/packages/packagesDetails";

const PackagesPage = () => {
  return (
    <>
      <div className="px-4 mt-32 lg:mt-20 lg:px-20 mb-10 lg:mb-16 max-w-4xl md:m-auto">
        <h1 className="text-center mb-5">Packages</h1>
        <div className="text-center">
          <p className="font-semibold">
            Ready to start? Let's create some magic!
          </p>
          <p>
            I will be here in every step to make sure we create a seamless, fun
            and efficient work together!
          </p>
          <p>
            From mini-shoot, content refresh, product launching or just starting
            out, the packages below are designed to reply to your needs.
          </p>
        </div>
        <div className="grid place-items-center px-5">
          <SecondaryButton link="/packages">Discover packages</SecondaryButton>
        </div>
      </div>
      <Divider />
      <BaseInfoPackages />
      <PackagesDetails />
    </>
  );
};

export default PackagesPage;
