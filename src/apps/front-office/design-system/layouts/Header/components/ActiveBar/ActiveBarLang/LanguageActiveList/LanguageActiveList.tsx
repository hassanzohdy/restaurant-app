import { changeLocaleCode } from "@mongez/react-router";
import useToggleState from "../../../../Hooks/HeaderStateHook";

export default function LanguageActiveList() {
  const { state } = useToggleState();
  return (
    <ul
      className={`absolute z-30 w-full bg-white transition-all ${
        !state.langSwitch ? "translate-y-0" : "-translate-y-full"
      }`}>
      <li
        className="rtl:bg-backgroundHover text-center w-full"
        onClick={() => changeLocaleCode("ar")}>
        العربية
      </li>
      <li
        className="ltr:bg-backgroundHover text-center w-full"
        onClick={() => changeLocaleCode("")}>
        English
      </li>
    </ul>
  );
}
