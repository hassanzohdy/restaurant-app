import { AiOutlineSearch } from "react-icons/ai";
import { useHeaderStateOpen } from "../../../../../hooks/headerStateHook";
import HeaderSearchForm from "./HeaderSearchForm";

export default function HeaderSearch() {
  const openSearch = useHeaderStateOpen("headerSearch");

  return (
    <div>
      <AiOutlineSearch
        className="border border-border cursor-pointer rounded-full p-3 text-[45px] hover:bg-primary_hover"
        onClick={openSearch}
      />
      <HeaderSearchForm />
    </div>
  );
}
