import { AiOutlineSearch } from "react-icons/ai";
import useToggleState from "../../../Hooks/HeaderStateHook";
import HeaderSearchForm from "./HeaderSearchForm";
export default function HeaderSearch() {
  const { toggleState } = useToggleState();
  return (
    <div>
      <AiOutlineSearch
        className="border border-border cursor-pointer rounded-full p-3 text-[45px] hover:bg-primary_hover"
        onClick={() => toggleState("headerSearch")}
      />
      <HeaderSearchForm />
    </div>
  );
}
