import { FormControlProps, emailRule, requiredRule } from "@mongez/react-form";
import TextInputV2 from "./TextInputV2";

export default function EmailInput(props: FormControlProps) {
  return <TextInputV2 {...props} type="email" />;
}

EmailInput.defaultProps = {
  rules: [requiredRule, emailRule],
};
