import { langIcon } from "shared/assets";
import { useToggleState } from "../../../Hooks/headerStateHook";
import LanguageSwitchList from "../../DropDown/LanguageSwitchList";

export default function LanguageSwitch() {
  const { toggleState } = useToggleState();

  return (
    <div className="relative" onClick={() => toggleState("langSwitch")}>
      <button className="border border-border cursor-pointer rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover">
        <img src={langIcon} className="w-[31px]" />
      </button>
      <LanguageSwitchList />
    </div>
  );
}
