import { FormControlProps, emailRule, requiredRule } from "@mongez/react-form";
import TextInputV2 from "../../../../../design-system/components/Form/TextInputV2";

export default function CheckoutEmailInput(props: FormControlProps) {
  return <TextInputV2 {...props} type="email" />;
}

CheckoutEmailInput.defaultProps = {
  rules: [emailRule, requiredRule],
};
