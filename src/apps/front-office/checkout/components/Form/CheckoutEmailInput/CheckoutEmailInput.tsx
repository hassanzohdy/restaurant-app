import { FormControlProps, emailRule, requiredRule } from "src/form";
import CheckoutInputText from "../CheckoutInputText";

export default function CheckoutEmailInput(props: FormControlProps) {
  return <CheckoutInputText {...props} type="email" />;
}

CheckoutEmailInput.defaultProps = {
  rules: [emailRule, requiredRule],
};
