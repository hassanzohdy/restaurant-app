import { trans } from "@mongez/localization";
import { headerSearchAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { AiOutlineSearch } from "react-icons/ai";

export default function ActiveBarMyAccount() {
  return (
    <div onClick={headerSearchAtom.toggle} className="activeIcons">
      <AiOutlineSearch />
      <p>{trans("search")}</p>
    </div>
  );
}
