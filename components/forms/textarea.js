import { Field, ErrorMessage } from "formik";

const TextAreaFormik = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div className="">
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <Field
        as="textarea"
        className="text-input border-2 w-full max-w-lg p-2"
        id={name}
        name={name}
        {...rest}
        rows="4"
      />
      <span className="error text-xs p-1 text-red-500">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

export default TextAreaFormik;
