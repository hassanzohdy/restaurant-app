import { trans } from "@mongez/localization";
import { AiOutlineSearch } from "react-icons/ai";
import { searchActiveBarAtom } from "../activeBar-atom/activeBar-atom";

export default function ActiveBarMyAccount() {
  return (
    <div onClick={() => searchActiveBarAtom.toggle()} className="activeIcons">
      <AiOutlineSearch />
      <p>{trans("search")}</p>
    </div>
  );
}
