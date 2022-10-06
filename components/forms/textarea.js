import { Field, ErrorMessage } from "formik";

const TextAreaFormik = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div className="my-5">
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <Field
        as="textarea"
        className="text-input border-2 w-full max-w-lg p-2"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="error text-xs p-1 text-red-500"
      />
    </div>
  );
};

export default TextAreaFormik;
