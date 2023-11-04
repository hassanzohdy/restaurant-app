import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { FormControlProps, emailRule, requiredRule } from "src/form";

export default function EmailInput(props: FormControlProps) {
  return <TextInput {...props} type="email" />;
}

EmailInput.defaultProps = {
  rules: [requiredRule, emailRule],
};
