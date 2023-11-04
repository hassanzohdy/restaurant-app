import { phoneNumberRule } from "apps/front-office/checkout/utils/validation/phoneNumber";
import { FormControlProps, requiredRule } from "src/form";
import CheckoutInputText from "../CheckoutInputText/CheckoutInputText";

export default function CheckoutPhoneNumber(props: FormControlProps) {
  return <CheckoutInputText {...props} type="phoneNumber" />;
}

CheckoutPhoneNumber.defaultProps = {
  rules: [phoneNumberRule, requiredRule],
};
