import { changeLocaleCode } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import { useToggleState } from "../../../Hooks/headerStateHook";
export default function LanguageSwitchList() {
  const { groupState } = useToggleState();

  return (
    <div
      className={` absolute shadow-list transition-all bg-white rtl:left-0 ltr:right-0 overflow-hidden my-2 py-2 rounded-md ${
        groupState.langSwitch ? "w-[100px] h-[71px]" : "w-[0px] h-[0px]"
      } focus-within:w-[100px] focus-within:h-[71px]`}>
      <button
        className={`px-2 w-full hover:bg-backgroundHover cursor-pointer h-7 ${
          isRTL() ? "bg-backgroundHover" : "bg-background"
        }`}
        onClick={() => changeLocaleCode("ar")}>
        العربية
      </button>
      <button
        className={`px-2 w-full hover:bg-backgroundHover cursor-pointer h-7 ${
          isRTL() ? "bg-background" : "bg-backgroundHover"
        }`}
        onClick={() => changeLocaleCode("")}>
        English
      </button>
    </div>
  );
}
