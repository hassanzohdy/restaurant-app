import { IoLanguageSharp } from "react-icons/io5";
import useToggleState from "../../../Hooks/HeaderStateHook";
import LanguageSwitchList from "../../DropDown/LanguageSwitchList";

export default function LanguageSwitch() {
  const { toggleState } = useToggleState();

  return (
    <div className="relative">
      <button
        onClick={() => toggleState("langSwitch")}
        className="border border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary-hover">
        <IoLanguageSharp />
      </button>
      <LanguageSwitchList />
    </div>
  );
}
