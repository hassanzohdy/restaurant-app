import { trans } from "@mongez/localization";
import { languageSwitchAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { IoLanguageSharp } from "react-icons/io5";

export default function ActiveBarLang() {
  return (
    <div onClick={languageSwitchAtom.toggle} className="activeIcons">
      <IoLanguageSharp />
      <p>{trans("language")}</p>
    </div>
  );
}
