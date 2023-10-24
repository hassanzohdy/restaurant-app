import { headerSearchAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { AiOutlineSearch } from "react-icons/ai";
import HeaderSearchForm from "./HeaderSearchForm";

export default function HeaderSearch() {
  return (
    <div>
      <AiOutlineSearch
        className="border border-border cursor-pointer rounded-full p-3 text-[45px] hover:bg-primary_hover"
        onClick={headerSearchAtom.open}
      />
      <HeaderSearchForm />
    </div>
  );
}
