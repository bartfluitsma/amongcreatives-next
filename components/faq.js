import Divider from "./divider";

const FAQ = ({ faqs }) => {
  console.log("faqs", faqs);
  return (
    <>
      <section id="faq" className="text-gray-700 xl:pl-10">
        <div className="container px-4 md:pb-10 mx-auto">
          <h3 className="px-4 lg:text-center xl:text-left xl:px-40 md:pb-10">
            Frequently asked questions
          </h3>
          <div className=" lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full px-4 py-2 grid md:grid-cols-2 md:gap-5 md:gap-x-10">
              {faqs.map((faq, idx) => {
                return (
                  <details key={idx}>
                    <summary className="cursor-pointer font-semibold py-2 text-md">
                      {faq.attributes.question}
                    </summary>
                    <span>{faq.attributes.answer}</span>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
