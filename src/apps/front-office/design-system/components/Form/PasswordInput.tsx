import {
  FormControlProps,
  matchRule,
  minLengthRule,
  requiredRule,
} from "@mongez/react-form";
import TextInputV2 from "./TextInputV2";

export type PasswordInputProps = FormControlProps & {
  // props go here
  match?: string;
};

export default function PasswordInput(props: PasswordInputProps) {
  return <TextInputV2 {...props} type="password" />;
}

PasswordInput.defaultProps = {
  rules: [requiredRule, minLengthRule, matchRule],
};
