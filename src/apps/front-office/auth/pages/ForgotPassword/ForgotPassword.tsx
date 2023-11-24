import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { EmailInputV2 } from "apps/front-office/design-system/components/Form/EmailInput";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { useForgetPassword } from "../../hooks";

export default function ForgotPassword() {
  const submit = useForgetPassword();

  return (
    <div>
      <Helmet title={trans("lostYourPassword")} />
      <Breadcrumb
        title={trans("lostYourPassword")}
        navItems={[{ name: trans("lostYourPassword") }]}
      />
      <div className="flex flex-col container w-fit justify-center items-center my-[90px]">
        <Form
          className="form flex justify-center p-[40px] flex-col text-left transition-all bg-[#f6f6f6] sm:w-[600px] w-[350px] gap-5"
          onSubmit={submit}>
          <h1 className="text-4xl text-center font-bold">
            {trans("lostYourPassword")} ?
          </h1>
          <EmailInputV2
            label={trans("email")}
            placeholder={trans("enterEmail")}
            name="email"
            required
          />
          <SubmitButton>{trans("resetPassword")}</SubmitButton>
        </Form>
      </div>
    </div>
  );
}
