import {
  FormControlProps,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

export default function TextInput(props: FormControlProps) {
  const { id, error, value, changeValue, otherProps } = useFormControl(props);

  return (
    <div>
      {otherProps.label && (
        <label
          className="block text-black cursor-pointer font-medium text-base mb-2"
          htmlFor={id}>
          {otherProps.label}
          {props.required && <span className="ms-1 text-red-500">*</span>}
        </label>
      )}
      <input
        type={props.type || "text"}
        {...otherProps}
        id={id}
        value={value}
        className="block w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        onChange={e => {
          changeValue(e.target.value);
        }}
      />

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}

TextInput.defaultProps = {
  rules: [requiredRule, minLengthRule],
};
