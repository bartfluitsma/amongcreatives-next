import Link from "next/link";
import ContactForm from '../components/forms/contactForm';

const ContactPage = () => {
  return (
    <>
      <div className="grid place-items-center max-w-xl m-auto text-center mt-32 md:mt-10">
        <h1>Contact</h1>
        <p>
          If you got a question before booking don't hesitate to ask me your
          questions via the below form or send me an email at{" "}
          <a
            className="border-b-4 border-secondary"
            href="mailto:hello@amongcreatives.com"
          >
            hello@amongcreatives.com.
          </a>
        </p>
        <p className="text-center">
          For bookings, please{" "}
          <Link href="/book">
            <a className="border-b-4 border-secondary ">click here.</a>
          </Link>
        </p>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactPage;
