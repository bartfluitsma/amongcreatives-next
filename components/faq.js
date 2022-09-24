const FAQ = ({ faqs }) => {
    return (
        <>
            <div>
                <section className="text-gray-700">
                    <div className="container px-4 pt-20 pb-10 mx-auto">
                        <div className=" lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="w-full px-4 py-2 grid md:grid-cols-2 md:gap-5 md:gap-x-10">
                                {faqs.map((faq, idx) => {
                                    return (
                                        <details>
                                            <summary className="cursor-pointer font-semibold py-2">
                                                {faq.attributes.question}
                                            </summary>
                                            <span>
                                                {faq.attributes.answer}

                                            </span>
                                        </details>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default FAQ;