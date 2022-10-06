import { Field } from "formik";

const Checkboxform = ({ type, name, value }) => {
  return (
    <>
      <label className="pr-2 flex items-center my-2">
        <Field type={type} name={name} value={value} className="h-5 w-5" />
        <span className="pl-2">{value}</span>
      </label>
    </>
  );
};

export default Checkboxform;
