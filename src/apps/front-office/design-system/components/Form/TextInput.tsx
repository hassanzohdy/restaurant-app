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
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-400 rounded-md text-base shadow-sm placeholder-slate-400
        focus:outline-none focus:border-primary-main"
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
