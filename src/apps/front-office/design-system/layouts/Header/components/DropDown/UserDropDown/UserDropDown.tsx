import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { Link, navigateTo } from "@mongez/react-router";
import {
  OTPEmailAtom,
  loginNeedVerifyAtom,
} from "apps/front-office/account/atoms/auth-atoms";
import { showToastMessage } from "apps/front-office/account/hooks/useToastMessage";
import GoogleLoginButton from "apps/front-office/account/pages/LoginPage/components/GoogleLoginButton";
import { login } from "apps/front-office/account/service/auth";
import user from "apps/front-office/account/user";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { EmailInputV2 } from "apps/front-office/design-system/components/Form/EmailInput";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import { useHeaderState } from "apps/front-office/design-system/hooks/headerStateHook";
import URLS from "apps/front-office/utils/urls";
import UserDropDownLogout from "./UserDropDownLogout";
import "./_userDropDown.scss";

export default function UserDropDown() {
  const opened = useHeaderState("userIcon");

  if (user.isLoggedIn() && !user.isGuest()) {
    return <UserDropDownLogout />;
  }

  const submitLogin = ({ values, form }: FormSubmitOptions) => {
    login(values)
      .then(response => {
        user.login(response.data.user);

        showToastMessage({
          message: trans("successfullyLogin"),
        });

        location.reload();
      })
      .catch(error => {
        if (error.response.data.activateAccount) {
          loginNeedVerifyAtom.update(error.response.data.activateAccount);
          OTPEmailAtom.update(values.email);
          navigateTo(URLS.auth.login);
        }
        showToastMessage({
          message: error.response.data.error,
          type: "error",
          position: "TOP_LEFT",
        });

        form.submitting(false);
      });
  };
  return (
    <div>
      <div
        className={`absolute top-[59px] border-primary-main overflow-hidden border-t duration-200 shadow-list transition-all bg-white flex flex-col w-[300px] p-5  ${
          opened ? "opacity-100 visible" : "opacity-0 invisible"
        } rtl:left-[0px] ltr:-right-[125px] pt-5 focus:opacity-100`}>
        <div className="h-[48px]">
          <span className="text-[18px] text-[#333]">{trans("signIn")}</span>
          <Link
            to={URLS.auth.register}
            className="text-primary-main text-[14px] hover:underline rtl:mr-2 ml-2">
            {trans("createAnAccount")}
          </Link>
        </div>
        <Form
          className="flex flex-col justify-between gap-4"
          onSubmit={submitLogin}>
          <EmailInputV2
            name="email"
            id="HeaderEmailForm"
            required
            label={trans("email")}
            placeholder={trans("email")}
            className="block w-full px-3 py-2 bg-white rounded-md"
          />

          <PasswordInputV2
            name="password"
            id="HeaderPasswordForm"
            required
            label={trans("password")}
            placeholder={trans("passwordLabel")}
            className="block w-full px-3 py-2 bg-white rounded-md"
          />

          <SubmitButton>{trans("login")}</SubmitButton>
        </Form>
        <div className="flex justify-center w-full my-3">
          <GoogleLoginButton />
        </div>
        <div>
          <Link
            to={URLS.auth.forgotPassword}
            className="text-primary-main text-[14px] hover:underline ">
            {trans("lostYourPassword")} ?
          </Link>
        </div>
      </div>
    </div>
  );
}
