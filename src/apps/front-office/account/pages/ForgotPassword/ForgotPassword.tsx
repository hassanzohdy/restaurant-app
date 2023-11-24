import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { EmailInputV2 } from "apps/front-office/design-system/components/Form/EmailInput";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { useForgetPassword } from "../../hooks";

export default function ForgotPassword() {
  const submit = useForgetPassword();

  return (
    <div>
      <Breadcrumb
        title={trans("createAccount")}
        navItems={[{ name: trans("createAccount") }]}
      />
      <Form onSubmit={submit}>
        <EmailInputV2 label={trans("email")} name="email" required />
        <SubmitButton>Reset Password</SubmitButton>
      </Form>
    </div>
  );
}
