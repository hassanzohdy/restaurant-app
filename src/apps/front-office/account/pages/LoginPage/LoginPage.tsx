import { trans } from "@mongez/localization";
import { FormSubmitOptions } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { Link, navigateBack } from "@mongez/react-router";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { cn } from "apps/front-office/design-system/utils/cn";
import URLS from "apps/front-office/utils/urls";
import {
  toastError,
  toastSuccess,
} from "../../../../../shared/hooks/useToastMessage";
import { OTPEmailAtom, loginNeedVerifyAtom } from "../../atoms/auth-atoms";
import { login } from "../../service/auth";
import user from "../../user";
import OtpForm from "../Register/components/OtpForm";
import "./LoginPage.scss";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  const submitLogin = ({ values, form }: FormSubmitOptions) => {
    OTPEmailAtom.update(values.email);
    login(values)
      .then(response => {
        user.login(response.data.user);
        navigateBack();
        toastSuccess(trans("successfullyLogin"));
      })
      .catch(error => {
        if (error.response.data.activateAccount) {
          loginNeedVerifyAtom.update(error.response.data.activateAccount);
        }
        form.submitting(false);
        toastError(error.response.data.error);
      });
  };
  return (
    <>
      <Helmet title={trans("login")} />
      <Breadcrumb
        title={trans("login")}
        navItems={[{ name: trans("login") }]}
      />
      <div className={cn("container flex justify-center items-center my-10")}>
        <div
          className={cn(
            "flex justify-center flex-col text-left transition-all sm:w-[450px] w-[400px] px-0 container overflow-hidden ",
          )}>
          <div
            className={cn(
              "flex items-center transition-transform translate-x-[0%] bg-[#f6f6f6]",
              loginNeedVerifyAtom.useValue() &&
                "ltr:translate-x-[-100%] rtl:translate-x-[100%]",
            )}>
            <div className="flex gap-5 place-items-center p-4 px-10 flex-col min-w-full">
              <LoginForm submitLogin={submitLogin} />
            </div>
            <div
              className={cn(
                "min-w-full p-4 bg-[#f6f6f6]",
                loginNeedVerifyAtom.useValue() && "invisible",
              )}>
              <OtpForm />
            </div>
          </div>
          <div className="mt-[20px] w-full flex justify-between items-center ">
            <Link
              to={URLS.auth.register}
              className="text-[#808080] hover:text-[#535353] focus:text-[#535353] decoration-dotted">
              {trans("createAnAccount")}
            </Link>
            <Link
              to={URLS.auth.forgotPassword}
              className="text-[#808080] hover:text-[#535353] focus:text-[#535353] decoration-dotted">
              {trans("lostPassword")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
