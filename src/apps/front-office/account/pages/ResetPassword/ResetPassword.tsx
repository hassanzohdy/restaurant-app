import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import { OptInput } from "../../components/OptInput";
import { useResetPassword } from "../../hooks";

export default function ResetPassword() {
  const submitOTP = useResetPassword();
  return (
    <Form onSubmit={submitOTP}>
      <OptInput
        name="code"
        label="Verification code"
        required
        className="border-border border mb-3"
      />
      <PasswordInputV2
        name="password"
        required
        placeholder={trans("password")}
        label={trans("password")}
      />
      <PasswordInputV2
        name="confirmPassword"
        match="password"
        required
        placeholder={trans("confirmPassword")}
        label={trans("confirmPassword")}
      />
      <SubmitButton>Reset Password</SubmitButton>
    </Form>
  );
}
