import {
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

export default function CheckoutInputRadio(props: FormControlProps) {
  const { value, id, changeValue, name, otherProps } = useFormControl(props);
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={() => {
          changeValue(otherProps.label);
        }}
      />

      <label htmlFor={id}> {otherProps.label}</label>
    </div>
  );
}

CheckoutInputRadio.defaultProps = {
  rules: [requiredRule],
};
