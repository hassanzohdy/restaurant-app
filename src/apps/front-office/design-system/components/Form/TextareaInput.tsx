import {
  FormControlProps,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { cn } from "../../utils/cn";

type TextareaInputProps = {
  containerStyles?: string;
} & FormControlProps;

export default function TextareaInput({
  containerStyles,
  ...props
}: TextareaInputProps) {
  const { id, error, value, changeValue, otherProps, name } =
    useFormControl(props);

  return (
    <div className={containerStyles}>
      {otherProps.label && (
        <label
          className="block text-primary-text capitalize cursor-pointer text-base mb-2"
          htmlFor={id}>
          {otherProps.label}
          {props.required && <span className="ms-1 text-red-500">*</span>}
        </label>
      )}
      <textarea
        type={props.type || "text"}
        id={id}
        name={name}
        value={value}
        rows={6}
        className={cn(
          "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-base shadow-sm placeholder-slate-400 text-bodyTextColor focus:outline-none focus:border-primary-main",
          otherProps.className,
        )}
        onChange={e => {
          changeValue(e.target.value);
        }}
        {...otherProps}
      />

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}

TextareaInput.defaultProps = {
  rules: [requiredRule, minLengthRule],
};
