import { FormControlProps, emailRule, requiredRule } from "@mongez/react-form";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import TextInputV2 from "./TextInputV2";

export default function EmailInput(props: FormControlProps) {
  return <TextInput {...props} type="email" />;
}

export function EmailInputV2(props: FormControlProps) {
  return <TextInputV2 {...props} type="email" />;
}

EmailInput.defaultProps = {
  rules: [requiredRule, emailRule],
};

EmailInputV2.defaultProps = {
  rules: [requiredRule, emailRule],
};
