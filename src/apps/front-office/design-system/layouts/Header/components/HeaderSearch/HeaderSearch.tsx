import { IconSearch } from "@tabler/icons-react";
import useToggleState from "../../Hooks/HeaderStateHook";
import HeaderSearchForm from "../HeaderIcons/HeaderSearch/HeaderSearchForm";

export default function HeaderSearch() {
  const { toggleState } = useToggleState();

  return (
    <div>
      <button
        className="border border-border cursor-pointer rounded-full p-3 hover:bg-primary-hover"
        onClick={() => toggleState("headerSearch")}>
        <IconSearch className="w-5 h-5" />
      </button>
      <HeaderSearchForm />
    </div>
  );
}
