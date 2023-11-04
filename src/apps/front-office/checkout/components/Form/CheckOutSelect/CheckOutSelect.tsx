import {
  FormControlProps,
  requiredRule,
  useFormControl,
} from "src/form";
import { cn } from "apps/front-office/design-system/utils/cn";

export default function CheckOutSelect(
  props: FormControlProps,
  className: string,
) {
  const { value, formControl, id, name, changeValue, otherProps } =
    useFormControl(props);

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-black cursor-pointer font-medium text-base mb-2">
        {otherProps.label}{" "}
        {props.required && <span className="ms-1 text-red-500">*</span>}
      </label>

      <select
        value={value || formControl.defaultValue}
        id={id}
        name={name}
        onChange={e => changeValue(e.target.value)}
        {...otherProps}
        type="select"
        className={cn(
          "mt-1 block w-full px-3 py-3 bg-white border border-border rounded-md text-base focus:outline-none focus:border-primary-main appearance-none",
          className,
        )}>
        {otherProps.data.map(option => {
          return (
            <option key={option} className="text-xl" value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

CheckOutSelect.defaultProps = {
  rules: [requiredRule],
};
