import React, { useEffect, useRef } from "react";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Spinner from "../spinner";
import MyTextInput from "./inputFields";
import emailjs from "@emailjs/browser";
import TextAreaFormik from "./textarea";
import Checkboxform from "./checkbox";
import NumberInput from "./numberInput";
import { ScrollToFieldError } from "./scrollToField";

const BookingFormNew = () => {
  const form = useRef();
  const [spinner, setSpinner] = useState(false);

  return (
    <div className="my-10 max-w-lg m-auto">
      <Formik
        initialValues={{
          from_email: "",
          from_name: "",
          company_name: "",
          website_link: "",
          brand_description: "",
          products_type: "",
          shoot_style: "",
          shoot_purpose: [], // social media, website, magazine, etc...
          shoot_highlight: "",
          amount_photos: "",
          amount_items: "", // How many products / outfits would you like to shoot?
          shoot_date: "", // Date of the shoot
        }}
        validationSchema={Yup.object({
          from_name: Yup.string()
            .min(2, "Too Short!")
            .max(15, "Must be 18 characters or less")
            .required("Required"),
          from_email: Yup.string()
            .email("Please fill in a valid email address")
            .required("Required"),
          company_name: Yup.string(),
          website_link: Yup.string(),
          brand_description: Yup.string(),
          products_type: Yup.string(),
          shoot_style: Yup.string(),
          // shoot_purpose: Yup.string(),
          shoot_highlight: Yup.string(),
          amount_photos: Yup.number()
            // .required("Required")
            .min(10, "Min. is 10 photos.")
            .max(500, "Max. is 500 photos."),
          amount_items: Yup.number()
            .min(1, "Min. is 1 item.")
            .max(200, "Max. is 200 items."),
          shoot_date: Yup.date(),
        })}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          setSpinner(true);
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          emailjs
            .sendForm(
              "service_680pkub",
              "template_nxk6pm7",
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
                  placeholder="Jane"
                />
                <MyTextInput
                  label="Email Address"
                  name="from_email"
                  type="email"
                  placeholder="jane@emailprovider.com"
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
                  placeholder="instagram.com/yourinsta"
                />
                <MyTextInput
                  label="In three words, how would you describe your brand?"
                  name="brand_description"
                  type="text"
                  // placeholder="conscious, simple, "
                />
                <TextAreaFormik
                  name="products_type"
                  label="What kind of products would you like to shoot?"
                  // placeholder={`Jewelry, clothing,`}
                  rows="2"
                />
                <TextAreaFormik
                  name="shoot_style"
                  label="What kind of style are you looking for in this shoot?"
                  placeholder="neutral, warm &amp; cozy, bright &amp; fresh, etc."
                  rows="2"
                />
                <div className="my-5">
                  <div className="label text-sm font-semibold">
                    For what purpose do you need the photos?{" "}
                    <i>(multiple possible)</i>
                  </div>
                  <div className="md:grid md:grid-cols-3">
                    <Checkboxform
                      type="checkbox"
                      name="shoot_purpose"
                      value="Social media"
                    />
                    <Checkboxform
                      type="checkbox"
                      name="shoot_purpose"
                      value="Magazine"
                    />
                    <Checkboxform
                      type="checkbox"
                      name="shoot_purpose"
                      value="Website"
                    />
                    <Checkboxform
                      type="checkbox"
                      name="shoot_purpose"
                      value="Newsletter"
                    />
                    <Checkboxform
                      type="checkbox"
                      name="shoot_purpose"
                      value="Advertisement"
                    />
                    <Checkboxform
                      type="checkbox"
                      name="shoot_purpose"
                      value="Other"
                    />
                  </div>
                </div>
                <TextAreaFormik
                  name="shoot_highlight"
                  label="What would you like to highlight in this shoot?"
                  placeholder="helping customers understand the product, highlight specific features or ingredients, etc."
                  rows="2"
                />
                <NumberInput
                  name="amount_photos"
                  label="How many photos would you like to have?"
                  placeholder="eg. 30"
                />
                <NumberInput
                  name="amount_items"
                  label="How many products / items would you like to shoot?"
                  placeholder="eg. 5"
                />
                <div>
                  <label className="text-sm font-semibold" htmlFor="shoot_date">
                    By when would you like to receive the photos?
                  </label>
                  <div>
                    <Field
                      type="date"
                      name="shoot_date"
                      className="date-input border-2 p-2"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    disabled={formik.isSubmitting}
                    type="submit"
                    className="bg-accent py-2 px-6 shadow-softShadow flex"
                  >
                    Send booking request
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

export default BookingFormNew;
