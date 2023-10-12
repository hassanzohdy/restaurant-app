import { changeLocaleCode } from "@mongez/react-router";
import { languageSwitchAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { isRTL } from "apps/front-office/utils/helpers";

export default function LanguageSwitchList() {
  const open = languageSwitchAtom.use("opened");
  return (
    <ul
      className={`absolute shadow-list transition-all bg-background  overflow-hidden my-2 py-2 rounded-md ${
        open ? "w-[100px] h-[71px]" : "w-[0px] h-[0px]"
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
