import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { Link } from "@mongez/react-router";
import CheckoutPhoneInput from "apps/front-office/checkout/components/Form/CheckoutPhoneInput";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { EmailInputV2 } from "apps/front-office/design-system/components/Form/EmailInput";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import URLS from "apps/front-office/utils/urls";

export type RegisterFormProps = {
  submit: any;
};
export default function RegisterForm({ submit }: RegisterFormProps) {
  return (
    <>
      <h2 className="text-heading text-2xl font-bold pb-6">
        {trans("createAccount")}
      </h2>

      <div className={`opacity-40 text-sm flex items-center mt-1`}>
        {trans("doViaEmail")}
      </div>
      <Form
        onSubmit={submit}
        className="form grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInputV2
          name="firstName"
          autoFocus
          required
          label={trans("firstName")}
          placeholder={trans("firstName")}
        />
        <TextInputV2
          name="lastName"
          required
          label={trans("lastName")}
          placeholder={trans("lastName")}
        />
        <EmailInputV2
          name="email"
          required
          label={trans("emailAddress")}
          placeholder={trans("emailAddress")}
        />
        <CheckoutPhoneInput
          name="phoneNumber"
          label={trans("phoneNumber")}
          placeholder={trans("phoneNumber")}
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
        <SubmitButton>{trans("createAccount")}</SubmitButton>
      </Form>
      <div className="w-full">
        <Link
          to={URLS.auth.login}
          className="text-primary-main hover:text-primary-hover focus:text-primary-hover font-bold ml-1">
          {trans("signInAlready")}
        </Link>
      </div>
    </>
  );
}
