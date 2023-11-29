import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { OptInput } from "../../components/OptInput";
import { useResetPassword } from "../../hooks";

export default function ResetPassword() {
  const submitOTP = useResetPassword();
  return (
    <>
      <Helmet title={trans("resetYourPassword")} />
      <Breadcrumb
        title={trans("resetYourPassword")}
        navItems={[{ name: trans("resetYourPassword") }]}
      />
      <div className="flex flex-col container w-fit justify-center items-center my-[90px]">
        <Form
          className="form flex justify-center p-[40px] flex-col text-left transition-all bg-[#f6f6f6] sm:w-[600px] w-[350px] gap-2"
          onSubmit={submitOTP}>
          <h1 className="text-4xl font-bold text-center mb-5">
            {trans("resetPassword")}!
          </h1>
          <OptInput
            name="code"
            label={trans("verificationCode")}
            placeholder={trans("enterOtp")}
            required
            className="border-border border mb-3"
          />
          <PasswordInputV2
            name="password"
            required
            placeholder={trans("newPassword")}
            label={trans("newPassword")}
          />
          <PasswordInputV2
            name="confirmPassword"
            match="password"
            required
            placeholder={trans("confirmNewPassword")}
            label={trans("confirmNewPassword")}
          />
          <SubmitButton>{trans("resetPassword")}</SubmitButton>
        </Form>
      </div>
    </>
  );
}
