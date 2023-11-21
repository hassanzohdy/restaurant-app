import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import { useRegister } from "apps/front-office/account/hooks/use-auth";
import CheckoutPhoneInput from "apps/front-office/checkout/components/Form/CheckoutPhoneInput";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { EmailInputV2 } from "apps/front-office/design-system/components/Form/EmailInput";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import URLS from "apps/front-office/utils/urls";
import { googleIcon } from "shared/assets";
import { useCreateAccountVerifyCode } from "../../hooks";
import styles from "./register.module.scss";

export default function Register() {
  const { state, submit } = useRegister();

  const otpSubmit = useCreateAccountVerifyCode();

  return (
    <>
      <Helmet title={trans("createAccount")} />
      <div
        className={`${styles.register} container box-border w-10/12 sm:w-3/5 md:max-w-md h-auto my-12 shadow flex gap-5 place-items-center flex-col p-4 rounded-md`}>
        <h2 className="text-heading text-2xl font-bold pb-6">
          {trans("createAccount")}
        </h2>
        <button className="bg-slate-200 w-16 h-12 grid place-items-center rounded-md">
          <Link to={URLS.home} target="_blank">
            <img src={googleIcon} alt="google sign up icon" />
          </Link>
        </button>
        <div
          className={`${styles.hr} opacity-40 text-sm flex items-center mt-1`}>
          {trans("doViaEmail")}
        </div>
        <Form
          onSubmit={submit}
          className="form grid grid-cols-1 sm:grid-cols-2 gap-4">
          {state === "done" && (
            <Form
              // still working on it but don't know if that is correct
              onSubmit={otpSubmit}
              className="fixed top-50 right-5 animate-popupFade bg-white shadow-header py-5 px-5 rounded-xl z-20">
              <TextInput
                placeholder="Enter you OTP"
                name="otp"
                label="Enter you OTP code that sent to your Email"
                className="border-border border mb-3"
              />
              <SubmitButton>submit otp</SubmitButton>
            </Form>
          )}
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
      </div>
    </>
  );
}
