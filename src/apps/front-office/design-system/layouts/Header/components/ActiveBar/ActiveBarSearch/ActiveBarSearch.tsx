import { trans } from "@mongez/localization";
import { AiOutlineSearch } from "react-icons/ai";
import { useToggleStateActiveBar } from "../../../Hooks/HeaderStateHook";

export default function ActiveBarMyAccount() {
  const { toggleState } = useToggleStateActiveBar();
  return (
    <div onClick={() => toggleState("headerSearch")} className="activeIcons">
      <AiOutlineSearch />
      <p>{trans("search")}</p>
    </div>
  );
}
