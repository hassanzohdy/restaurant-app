import {
  FormControlProps,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import React from "react";
import { cn } from "../../utils/cn";

type TextInputProps = {
  containerStyle?: string;
} & FormControlProps;

function _TextInput({ containerStyle, ...rest }: TextInputProps, ref: any) {
  const { id, error, value, inputRef, changeValue, otherProps } =
    useFormControl(rest);

  console.log(rest.type);

  return (
    <div className={containerStyle}>
      {otherProps.label && (
        <label
          className="block text-primary-text cursor-pointer text-base mb-2"
          htmlFor={id}>
          {otherProps.label}
          {rest.required && <span className="ms-1 text-red-500">*</span>}
        </label>
      )}
      <input
        type={rest.type || "text"}
        {...otherProps}
        id={id}
        ref={_ref => {
          inputRef.current = _ref;
          if (ref) {
            ref.current = _ref;
          }
        }}
        value={value}
        className={cn(
          "mt-1 block w-full px-3 py-2 bg-white text-bodyTextColor border border-slate-300 rounded-md text-base shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary-main",
          otherProps.className,
        )}
        onChange={e => {
          changeValue(e.target.value);
        }}
      />

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}

const TextInput = React.forwardRef(_TextInput);

TextInput.defaultProps = {
  rules: [requiredRule, minLengthRule],
};

export default TextInput;
