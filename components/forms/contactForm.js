import React, { useEffect, useRef } from "react";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Spinner from "../spinner";
import MyTextInput from "./inputFields";
import emailjs from "@emailjs/browser";
import TextAreaFormik from "./textarea";
import { ScrollToFieldError } from "./scrollToField";
import Checkboxform from "./checkbox";

const ContactForm = () => {
  const form = useRef();
  const [spinner, setSpinner] = useState(false);

  return (
    <div className="my-10 max-w-lg m-auto">
      <Formik
        initialValues={{
          from_email: "",
          from_name: "",
          message: "",
          company_name: "",
          website_link: "",
          shoot_purpose: [],
        }}
        validationSchema={Yup.object({
          from_name: Yup.string()
            .min(2, "Too Short!")
            .max(15, "Must be 18 characters or less")
            .required("Required"),
          from_email: Yup.string()
            .email("Please fill in a valid email address")
            .required("Required"),
          message: Yup.string()
            .required("Please write your message")
            .min(20, "Message must be at least 20 characters")
            .max(
              1200,
              "Maximum amount of characters reached, please keep it below 1200 characters."
            ),
          company_name: Yup.string(),
          website_link: Yup.string(),
        })}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          setSpinner(true);
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          emailjs
            .sendForm(
              "service_680pkub",
              "template_3ndrzn3",
              form.current,
              "XqynxQw3ielrMRhi8"
            )
            .then((res) => {
              if (res.status === 200) {
                console.log(res.text);
                setStatus({
                  sent: true,
                  msg: "Message sent succesfully, thanks!",
                });
              }
            })
            .catch((err) => {
              console.log(res.text);
              setStatus({
                sent: false,
                msg: `Error! ${err}. Please try again later.`,
              });
            });

          setSubmitting(false);
        }}
      >
        {(formik) => (
          <form
            className="px-4 lg:px-0"
            onSubmit={formik.handleSubmit}
            ref={form}
          >
            {formik.status && formik.status.msg && formik.status.sent ? (
              <p className="text-center my-10 font-semibold text-primary text-lg">
                {formik.status.msg}
              </p>
            ) : (
              <>
                <ScrollToFieldError />
                <MyTextInput
                  label="Name"
                  name="from_name"
                  type="text"
                  // placeholder="Jane"
                />
                <MyTextInput
                  label="Email Address"
                  name="from_email"
                  type="email"
                  placeholder="yourname@emailprovider.com"
                />
                <TextAreaFormik
                  name="message"
                  label="Message"
                  placeholder={`Hi Nass, \nCould you tell me more about...`}
                  rows="4"
                />
                <MyTextInput
                  label="What is the name of your company?"
                  name="company_name"
                  type="text"
                />
                <MyTextInput
                  label="Do you have a link to your website, Insta or a different platform?"
                  name="website_link"
                  type="text"
                  placeholder="instagram.com/instagramhandle"
                />
                <div className="my-5">
                  <div className="label text-sm font-semibold">
                    What service(s) are you interested in?{" "}
                    <i>(multiple possible)</i>
                  </div>
                  <div className="mt-3 mb-6">
                    <Checkboxform
                      type="checkbox"
                      name="shoot_purpose"
                      value="Product photography"
                    />
                    <Checkboxform
                      type="checkbox"
                      name="shoot_purpose"
                      value="Fashion photography"
                    />
                  </div>
                </div>
                <div>
                  <button
                    disabled={formik.isSubmitting}
                    type="submit"
                    className="bg-accent py-2 px-6 shadow-softShadow flex"
                  >
                    Send message
                    {spinner && spinner === true ? <Spinner /> : null}
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
