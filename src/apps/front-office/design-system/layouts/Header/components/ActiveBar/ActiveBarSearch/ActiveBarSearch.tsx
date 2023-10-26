import { trans } from "@mongez/localization";
import { AiOutlineSearch } from "react-icons/ai";
import useToggleState from "../../../Hooks/HeaderStateHook";

export default function ActiveBarMyAccount() {
  const { toggleState } = useToggleState();
  return (
    <div onClick={() => toggleState("headerSearch")} className="activeIcons">
      <AiOutlineSearch />
      <p>{trans("search")}</p>
    </div>
  );
}
