import VerticalText from "../components/verticalTitle";
import SecondaryButton from "../components/secondaryButton";
import Divider from "../components/divider";
import BaseInfoPackages from "../components/packages/baseInfoPackages";
import PackagesDetails from "../components/packages/packagesDetails";
import SignupForm from "../components/signupForm";

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
          <SecondaryButton link="#packageDetails">
            Discover packages
          </SecondaryButton>
        </div>
      </div>
      <Divider />
      <BaseInfoPackages />
      <PackagesDetails />
      <div className="text-center px-4 my-10 max-w-2xl m-auto grid place-items-center">
        <p className="text-3xl">Cannot find any packages that suit you?</p>
        <p>
          No worry! just get in touch and we will work out together a custom
          package that suits your exact needs.
        </p>
        <SecondaryButton link="/contact">Contact me</SecondaryButton>
      </div>
      <div className="my-20">
        <Divider />
      </div>
      <div className="px-4" id="welcomeguide">
        <SignupForm />
      </div>
    </>
  );
};

export default PackagesPage;
