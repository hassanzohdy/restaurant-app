import { changeLocaleCode } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import useToggleState from "../../../Hooks/HeaderStateHook";
export default function LanguageSwitchList() {
  const { state } = useToggleState();

  return (
    <ul
      className={`absolute shadow-list transition-all bg-white rtl:left-0 ltr:right-0 overflow-hidden my-2 py-2 rounded-md ${
        state.langSwitch ? "w-[100px] h-[71px]" : "w-[0px] h-[0px]"
      } `}>
      <li
        className={`px-2 hover:bg-backgroundHover cursor-pointer h-7 ${
          isRTL() ? "bg-backgroundHover" : "bg-background"
        }`}
        onClick={() => changeLocaleCode("ar")}>
        العربية
      </li>
      <li
        className={`px-2 hover:bg-backgroundHover cursor-pointer h-7 ${
          isRTL() ? "bg-background" : "bg-backgroundHover"
        }`}
        onClick={() => changeLocaleCode("")}>
        English
      </li>
    </ul>
  );
}
