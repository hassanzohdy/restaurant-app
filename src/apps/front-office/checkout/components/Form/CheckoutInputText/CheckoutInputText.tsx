import { cn } from "apps/front-office/design-system/utils/cn";
import {
  FormControlProps,
  lengthRule,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "src/form";

export default function CheckoutInputText(props: FormControlProps) {
  const { value, id, error, name, changeValue, otherProps } =
    useFormControl(props);
  return (
    <div>
      {otherProps.label && (
        <label
          htmlFor={id}
          className="block text-black cursor-pointer font-medium text-base mb-2">
          {...otherProps.label}{" "}
          {props.required && <span className="ms-1 text-red-500">*</span>}
        </label>
      )}

      <input
        type={otherProps.type || "text"}
        value={value}
        id={id}
        name={name}
        {...otherProps}
        onChange={e => {
          changeValue(e.target.value);
        }}
        className={cn(
          "mt-1 block w-full px-3 py-3 bg-white border border-border rounded-md text-base placeholder-slate-400 focus:outline-none focus:border-primary-main ",
          error && "border-l-[2px] border-l-red-500 focus:border-l-red-500",
          value &&
            !error &&
            "border-l-[2px] border-l-green-500 focus:border-l-green-500",
          otherProps.className,
        )}
      />

      <div
        className={cn(
          "text-red-500 text-sm mt-1 transition-all duration-200 overflow-hidden h-0 ",
          error && "h-[20px]",
        )}>
        <span>{error}</span>
      </div>
    </div>
  );
}

CheckoutInputText.defaultProps = {
  rules: [requiredRule, minLengthRule, lengthRule],
};
