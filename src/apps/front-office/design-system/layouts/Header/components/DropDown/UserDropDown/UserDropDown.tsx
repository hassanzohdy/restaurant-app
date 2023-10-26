import { trans } from "@mongez/localization"; // Import the trans function
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import useToggleState from "../../../Hooks/HeaderStateHook";

export default function UserDropDown() {
  const { state } = useToggleState();
  return (
    <div
      className={`absolute top-[50px] border-primary-main border-t overflow-hidden duration-200 shadow-list transition-all bg-white ${
        state.userIcon ? "w-[280px] h-[356.469px] p-5" : "h-0 w-0 p-0"
      } rtl:left-[0px] ltr:-right-[0px]`}>
      <div className="h-[48px]">
        <span className="text-[18px] text-[#333]">{trans("signIn")}</span>
        <Link
          to={URLS.auth.register}
          className="text-primary-main text-[14px] hover:underline rtl:mr-2 ml-2">
          {trans("createAnAccount")}
        </Link>
      </div>
      <form>
        <label
          htmlFor="email"
          className="mb-[.5rem] text-[14px] leading-[1.5] text-body font-normal">
          {trans("usernameOrEmail")} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="rounded-md text-body p-[10px] w-full border-border border border-solid outline-none"
          id="email"
          placeholder={trans("username")}
        />
        <label
          htmlFor="password"
          className="mb-[.5rem] text-[14px] leading-[1.5] text-bodyTextColor font-normal">
          {trans("password")} <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="password"
          placeholder={trans("passwordLabel")}
          className="rounded-md text-body p-[10px] w-full border-border border border-solid outline-none"
        />
        <div>
          <button className="bg-primary-main text-black font-bold w-full py-2 rounded-lg text-sm mt-5">
            {trans("login")}
          </button>
        </div>
      </form>
      <div className="mt-12">
        <Link
          to={URLS.auth.resetPassword}
          className="text-primary text-[14px] hover:underline ">
          {trans("lostYourPassword")}
        </Link>
      </div>
    </div>
  );
}
