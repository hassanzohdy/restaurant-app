import { languageSwitchAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { IoLanguageSharp } from "react-icons/io5";
import LanguageSwitchList from "../../DropDown/LanguageSwitchList";

export default function LanguageSwitch() {
  return (
    <div>
      <div
        onClick={languageSwitchAtom.toggle}
        className="border border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary_hover">
        <IoLanguageSharp />
      </div>
      <LanguageSwitchList />
    </div>
  );
}
