import { FormControlProps, emailRule, requiredRule } from "@mongez/react-form";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";

export default function EmailInput(props: FormControlProps) {
  return <TextInput {...props} type="email" />;
}

EmailInput.defaultProps = {
  rules: [requiredRule, emailRule],
};
