import { useField } from 'formik';

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
                    <div className="error text-xs p-1 text-red-500">{meta.error}</div>
                ) : null}
            </div>
        </div>
    );
};

export default MyTextInput