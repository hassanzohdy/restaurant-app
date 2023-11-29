import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useRegister } from "apps/front-office/auth/hooks/useRegister";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { cn } from "apps/front-office/design-system/utils/cn";
import OtpForm from "./components/OtpForm";
import RegisterForm from "./components/RegisterForm";
import styles from "./register.module.scss";

export default function Register() {
  const { state, submit } = useRegister();

  return (
    <>
      <Helmet title={trans("createAccount")} />
      <Breadcrumb
        title={trans("createAccount")}
        navItems={[{ name: trans("createAccount") }]}
      />
      <div className={cn("container flex justify-center items-center")}>
        <div
          className={cn(
            "box-border w-10/12 sm:w-3/5 md:max-w-md h-auto my-12 shadow rounded-md overflow-hidden",
            styles.register,
          )}>
          <div
            className={cn(
              "flex items-center transition-transform translate-x-[0%]",
              state === "done" &&
                "ltr:translate-x-[-100%] rtl:translate-x-[100%]",
            )}>
            <div
              className={cn(
                "flex gap-5 place-items-center p-4 flex-col min-w-full",
              )}>
              <RegisterForm submit={submit} />
            </div>
            <div className="min-w-full p-4">
              <OtpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
