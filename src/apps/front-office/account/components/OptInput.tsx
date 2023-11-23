import {
  FormControlProps,
  integerRule,
  requiredRule,
} from "@mongez/react-form";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";

export function OptInput(props: FormControlProps) {
  return <TextInputV2 {...props} />;
}
OptInput.defaultProps = {
  rules: [requiredRule, integerRule],
};
