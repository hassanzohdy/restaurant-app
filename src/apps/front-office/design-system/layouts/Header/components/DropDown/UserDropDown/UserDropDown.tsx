import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { Link } from "@mongez/react-router";
import { useRegister } from "apps/front-office/account/hooks/use-auth";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import PasswordInput from "apps/front-office/design-system/components/Form/PasswordInput";
import { cn } from "apps/front-office/design-system/utils/cn";
import URLS from "apps/front-office/utils/urls";
import { useRef } from "react";
import useFocusOnToggle from "shared/hooks/useFocusOnToggle";
import { useToggleState } from "../../../Hooks/headerStateHook";
import "./_userDropDown.scss";

export default function UserDropDown() {
  const { groupState } = useToggleState();
  const { submit } = useRegister();

  const inputParentRef = useRef<HTMLDivElement | null>(null);
  const childNodes = inputParentRef.current?.childNodes[0]
    .childNodes[1] as HTMLInputElement;

  useFocusOnToggle(childNodes, groupState.userIcon);
  return (
    <div>
      <div
        className={cn(
          "overflow-hidden transition-[height] duration-75  absolute top-[55px] right-[16px]",
          groupState.userIcon ? "h-[8px]" : "h-[0px] delay-150",
        )}>
        <div className="w-0 h-0 border-transparent transition-[border] border-t-primary-main border-[8px]"></div>
      </div>

      <div
        className={`absolute top-[64px]  border-primary-main overflow-hidden border-t duration-200 shadow-list transition-all bg-white flex flex-col ${
          groupState.userIcon
            ? "w-[300px] h-[380px] p-5 delay-75"
            : "h-0 w-0 p-0"
        } rtl:left-[0px] ltr:-right-[-23px] focus-within:w-[300px] focus-within:h-[380px] focus-within:p-5 pt-5`}>
        <div className="h-[48px]">
          <span className="text-[18px] text-[#333]">{trans("signIn")}</span>
          <Link
            to={URLS.auth.register}
            className="text-primary-main text-[14px] hover:underline rtl:mr-2 ml-2">
            {trans("createAnAccount")}
          </Link>
        </div>
        <Form className="flex flex-col justify-between gap-4" onSubmit={submit}>
          <div ref={inputParentRef}>
            <EmailInput
              name="HeaderEmailForm"
              required
              label={trans("usernameOrEmail")}
              placeholder={trans("username")}
              className="block w-full px-3 py-2 bg-white rounded-md"
            />
          </div>

          <PasswordInput
            name="HeaderPasswordForm"
            required
            label={trans("password")}
            placeholder={trans("passwordLabel")}
            className="block w-full px-3 py-2 bg-white rounded-md"
          />

          <SubmitButton>{trans("login")}</SubmitButton>
        </Form>
        <div>
          <Link
            to={URLS.auth.resetPassword}
            className="text-primary-main text-[14px] hover:underline ">
            {trans("lostYourPassword")}
          </Link>
        </div>
      </div>
    </div>
  );
}
