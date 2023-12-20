import { trans } from "@mongez/localization";
import {
  FormControlProps,
  emailRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

export default function SubscriptionInput(props: FormControlProps) {
  const { value, changeValue, error, id, name, type } = useFormControl(props);
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={e => {
          changeValue(e.target.value);
        }}
        className="block w-full h-full border-0 bg-transparent px-[15px] text-white placeholder:text-primary-text capitalize focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 max-2xl:px-[8px] max-xl:text-[13px] max-lg:max-w-auto max-lg:px-[15px] max-lg:text-[14px] "
        placeholder={trans("yourEmail")}
      />

      <div className="absolute mt-2">
        {error && (
          <span
            style={{
              color: "red",
            }}>
            {error}
          </span>
        )}
      </div>
    </div>
  );
}

SubscriptionInput.defaultProps = {
  rules: [requiredRule, emailRule],
};

// POST /newsletter/subscribeToNewsletter
