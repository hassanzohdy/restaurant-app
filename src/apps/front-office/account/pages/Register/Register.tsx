import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import { useRegister } from "apps/front-office/account/hooks/use-auth";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import PasswordInput from "apps/front-office/design-system/components/Form/PasswordInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import URLS from "apps/front-office/utils/urls";
import { googleIcon } from "shared/assets";
import ToastMessage from "./ToastMessage";
import styles from "./register.module.scss";

export default function Register() {
  const { state, submit } = useRegister();

  if (state === "done") {
    // TODO: DIsplay a message to activate the account from the email.
    return (
      <>
        <Helmet title={trans("createAccount")} />
        <ToastMessage />
      </>
    );
  }

  return (
    <>
      <Helmet title={trans("createAccount")} />
      <div
        className={`${styles.register} container box-border w-10/12 sm:w-3/5 md:max-w-md h-auto my-12 shadow flex gap-5 place-items-center flex-col p-4 rounded-md`}>
        <h2 className="text-heading text-2xl font-bold pb-6">
          {trans("createAccount")}
        </h2>
        <button className="bg-slate-200 w-16 h-12 grid place-items-center rounded-md">
          <Link to={`${URLS.home}`} target="_blank">
            <img src={googleIcon} alt="google signup icon" />
          </Link>
        </button>
        <div
          className={`${styles.hr} opacity-40 text-sm flex items-center mt-1`}>
          {trans("doViaEmail")}
        </div>
        <Form
          onSubmit={submit}
          className="form grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            name="firstName"
            autoFocus
            required
            label={trans("firstName")}
            placeholder={trans("firstName")}
          />
          <TextInput
            name="lastName"
            required
            label={trans("lastName")}
            placeholder={trans("lastName")}
          />
          <EmailInput
            name="email"
            required
            label={trans("emailAddress")}
            placeholder={trans("emailAddress")}
          />
          <TextInput
            name="phoneNumber"
            label={trans("phoneNumber")}
            placeholder={trans("phoneNumber")}
          />
          <PasswordInput
            name="password"
            required
            placeholder={trans("password")}
            label={trans("password")}
          />
          <PasswordInput
            name="confirmPassword"
            match="password"
            required
            placeholder={trans("confirmPassword")}
            label={trans("confirmPassword")}
          />
          <SubmitButton>{trans("createAccount")}</SubmitButton>
        </Form>
        {trans("signInAlready")}{" "}
        <Link to={URLS.auth.login} className="text-secondary font-bold">
          {trans("login")}
        </Link>
      </div>
    </>
  );
}
