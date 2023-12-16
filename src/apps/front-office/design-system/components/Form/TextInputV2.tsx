import {
  FormControlProps,
  lengthRule,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { cn } from "apps/front-office/design-system/utils/cn";
import { forwardRef } from "react";

function _TextInputV2(props: FormControlProps, ref: any) {
  const { value, id, error, type, name, changeValue, inputRef, otherProps } =
    useFormControl(props);

  return (
    <div className="w-full">
      {otherProps.label && (
        <label
          htmlFor={id}
          className="block text-gray-700 cursor-pointer font-medium text-base mb-2">
          {...otherProps.label}{" "}
          {props.required && <span className="ms-1 text-red-500">*</span>}
        </label>
      )}

      <input
        type={type || "text"}
        value={value}
        id={id}
        name={name}
        onChange={e => {
          changeValue(e.target.value);
        }}
        ref={_ref => {
          inputRef.current = _ref;
          if (ref) {
            ref.current = _ref;
          }
        }}
        {...otherProps}
        className={cn(
          "mt-1 block w-full p-2 bg-white border border-border rounded-md text-base placeholder-slate-400 focus:outline-none focus:border-primary-main ",
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

const TextInputV2 = forwardRef(_TextInputV2);

TextInputV2.defaultProps = {
  rules: [requiredRule, minLengthRule, lengthRule],
};

export default TextInputV2;
