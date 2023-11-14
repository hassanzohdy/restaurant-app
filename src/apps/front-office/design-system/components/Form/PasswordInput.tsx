import {
  FormControlProps,
  matchRule,
  minLengthRule,
  requiredRule,
} from "@mongez/react-form";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import TextInputV2 from "./TextInputV2";

export type PasswordInputProps = FormControlProps & {
  // props go here
  match?: string;
};

export default function PasswordInput(props: PasswordInputProps) {
  return <TextInput {...props} type="password" />;
}

export function PasswordInputV2(props: PasswordInputProps) {
  return <TextInputV2 {...props} type="password" />;
}

PasswordInput.defaultProps = {
  rules: [requiredRule, minLengthRule, matchRule],
};

PasswordInputV2.defaultProps = {
  rules: [requiredRule, minLengthRule, matchRule],
};
