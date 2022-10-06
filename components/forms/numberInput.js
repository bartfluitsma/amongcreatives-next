import { Field, ErrorMessage } from "formik";

const NumberInput = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="block my-5">
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <div>
        <Field
          type="number"
          className="text-input border-2 p-2"
          name={name}
          {...rest}
        />
        <span className="error text-xs p-1 text-red-500">
          <ErrorMessage name={name} />
        </span>
      </div>
    </div>
  );
};

export default NumberInput;
