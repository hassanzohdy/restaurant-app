import { trans } from "@mongez/localization";
import { AiOutlineSearch } from "react-icons/ai";
import useResetStatesOnAction from "../../../../../hooks/useResetStatesOnAction";
import { searchActiveBarAtom } from "../activebar-atom/acivebar-atom";

export default function ActiveBarMyAccount() {
  const { handleClickOutsideRef } = useResetStatesOnAction(searchActiveBarAtom);

  return (
    <div
      onClick={() => searchActiveBarAtom.toggle()}
      className="activeIcons"
      ref={handleClickOutsideRef}>
      <AiOutlineSearch />
      <p>{trans("search")}</p>
    </div>
  );
}
