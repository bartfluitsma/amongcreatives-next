import React, { useEffect } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="my-4">
      <label className="text-sm font-semibold" htmlFor={props.id || props.name}>
        {label}
      </label>
      <div>
        <input
          className="text-input border-2 w-full max-w-lg p-2"
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="error text-xs p-1 text-red-500">*{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

const SignupForm = () => {
  return (
    <div className="my-10 max-w-lg m-auto">
      <div className="text-center px-4">
        <p className="text-2xl font-Cormorant font-semibold">
          Download welcome guide
        </p>
        <p className="md:px-10">
          Download the welcome guide to get the full-service details.
        </p>
      </div>
      <Formik
        initialValues={{
          email: "",
          name: "",
          fields: {
            company: "",
            city: "",
          },
          type: "",
          groupId: "111131511",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var requestOptions = {
            method: "post",
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify(values, null, 2),
          };

          fetch(
            "https://v1.nocodeapi.com/bart/mailerlite/sZgxnDFkQfylYvPw/subscribers?groupId=111131511",
            requestOptions
          )
            .then((res) => {
              if (res.status === 200) {
                setStatus({
                  sent: true,
                  msg: "Subscribed sucessfully, thanks!",
                });
              }
            })
            .catch((err) => {
              setStatus({
                sent: false,
                msg: `Error! ${err}. Please try again later.`,
              });
            });
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {formik.status && formik.status.msg && formik.status.sent ? (
              <p className="text-center my-10 font-semibold text-primary text-lg">
                {formik.status.msg}
              </p>
            ) : (
              <>
                <MyTextInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Jane"
                />
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@youremail.com"
                />
                <div className="grid place-items-center">
                  <button
                    type="submit"
                    className="bg-accent py-2 px-6 shadow-softShadow"
                  >
                    Download welcome guide
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

export default SignupForm;
