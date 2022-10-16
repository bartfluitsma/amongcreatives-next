import Head from 'next/head';
import Divider from "../components/divider";
import BookingForm from '../components/forms/bookingForm';

const BookingPage = () => {
  return (
    <>
      <Head>
        <title>Among creatives | book a shoot</title>
      </Head>
      <div className="grid place-items-center max-w-2xl m-auto text-center mt-32 md:mt-10 mb-10 px-4">
        <h1>Inquiry</h1>
        <p>
          Get in touch so we can start bringing your brand vision to life and
          create impactful content! Please fill in the questions below and will
          be in touch within 48h.
        </p>
        <p>
          If you have questions before booking, please just drop me{" "}
          <a
            className="border-b-4 border-secondary"
            href="mailto:hello@amongcreatives.com"
          >
            an email
          </a>
          .
        </p>
        <p>I'm already excited to start working together!</p>
      </div>
      <Divider />
      <BookingForm />
    </>
  );
};

export default BookingPage;
