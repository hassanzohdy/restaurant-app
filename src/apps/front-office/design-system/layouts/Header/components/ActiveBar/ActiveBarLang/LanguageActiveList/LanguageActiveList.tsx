import { changeLocaleCode } from "@mongez/react-router";
import { languageSwitchAtom } from "apps/front-office/design-system/atoms/headerAtoms";

export default function LanguageActiveList() {
  const opened = languageSwitchAtom.use("opened");
  return (
    <ul
      className={`absolute z-30 w-full bg-white transition-all ${
        !opened ? "top-full" : "-top-full"
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
