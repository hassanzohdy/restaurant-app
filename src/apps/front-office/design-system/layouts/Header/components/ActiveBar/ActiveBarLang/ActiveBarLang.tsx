import { trans } from "@mongez/localization";
import { IoLanguageSharp } from "react-icons/io5";
import { useToggleStateActiveBar } from "../../../Hooks/HeaderStateHook";

export default function ActiveBarLang() {
  const { toggleState } = useToggleStateActiveBar();
  return (
    <div onClick={() => toggleState("langSwitch")} className="activeIcons">
      <IoLanguageSharp />
      <p>{trans("language")}</p>
    </div>
  );
}
