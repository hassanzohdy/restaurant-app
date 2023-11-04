import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import {
  FormControlProps,
  matchRule,
  minLengthRule,
  requiredRule,
} from "src/form";

export type PasswordInputProps = FormControlProps & {
  // props go here
  match?: string;
};

export default function PasswordInput(props: PasswordInputProps) {
  return <TextInput {...props} type="password" />;
}

PasswordInput.defaultProps = {
  rules: [requiredRule, minLengthRule, matchRule],
};
