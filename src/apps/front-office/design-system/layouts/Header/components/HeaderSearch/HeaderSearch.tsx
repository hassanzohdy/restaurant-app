import OverLay from "app/design-system/layouts/OverLay";
import { BsSearch } from "react-icons/bs";
import { useToggleState } from "../../Hooks/headerStateHook";
import HeaderSearchForm from "../HeaderIcons/HeaderSearch/HeaderSearchForm";
export default function HeaderSearch() {
  const { groupState, toggleState } = useToggleState();

  return (
    <>
      <OverLay atom={null} opened={groupState.headerSearch} />
      <div>
        <button
          className="border border-border cursor-pointer rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary-hover"
          onClick={() => toggleState("headerSearch")}>
          <BsSearch className="w-5 h-5" />
        </button>
        <HeaderSearchForm />
      </div>
    </>
  );
}
