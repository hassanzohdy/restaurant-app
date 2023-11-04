import { FormControlProps, requiredRule, useFormControl } from "@mongez/react-form";

export default function CheckoutInputRadio(props: FormControlProps) {
  const { id, name, value, otherProps } = useFormControl(props, {
    uncheckedValue: true,
  });

  return (
    <div>
      <input id={id} name={name} type="radio" value={value} {...otherProps} />

      <label htmlFor={id}>{otherProps.label}</label>
    </div>
  );
}

CheckoutInputRadio.defaultProps = {
  rules: [requiredRule],
};
