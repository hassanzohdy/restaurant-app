import { trans } from "@mongez/localization";
import { FormControlProps, useFormControl } from "@mongez/react-form";

export default function textInput(props: FormControlProps) {
  const { value, changeValue } = useFormControl(props);
  return (
    <input
      type="email"
      name="email"
      id="email"
      value={value}
      onChange={e => {
        changeValue(e.target.value);
      }}
      className="block max-w-[60%] border-0 bg-transparent px-[15px] text-white placeholder:text-primary-text capitalize focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 max-2xl:px-[8px] max-xl:text-[13px] max-lg:max-w-auto max-lg:px-[15px] max-lg:text-[14px] "
      placeholder={trans("yourEmail")}
    />
  );
}
