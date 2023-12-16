import { FormControlProps, requiredRule } from "@mongez/react-form";
import { phoneNumberRule } from "apps/front-office/checkout/utils/validation/phoneNumber";
import TextInputV2 from "../../../../../design-system/components/Form/TextInputV2";

export default function CheckoutPhoneNumber(props: FormControlProps) {
  return <TextInputV2 {...props} type="phoneNumber" />;
}

CheckoutPhoneNumber.defaultProps = {
  rules: [phoneNumberRule, requiredRule],
};
