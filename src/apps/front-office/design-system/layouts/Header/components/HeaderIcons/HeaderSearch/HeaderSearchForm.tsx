import { trans } from "@mongez/localization";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useFocusOnToggle from "shared/hooks/useFocusOnToggle";
import { useToggleState } from "../../../Hooks/headerStateHook";
import useEscapeToClose from "../../../Hooks/useEscapeToClose";

export default function HeaderSearchForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { groupState, toggleState } = useToggleState();

  useFocusOnToggle(inputRef.current, groupState.headerSearch);

  useEscapeToClose(groupState.headerSearch, () =>
    toggleState("searchProducts"),
  );

  return (
    <form
      className={`container bg-white w-full h-full flex items-center absolute top-0 left-0 transition-all z-50 duration-200 ${
        groupState.headerSearch ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
      <input
        type="text"
        placeholder={trans("searchProducts")}
        className="w-full h-full outline-none border-none text-2xl"
        ref={inputRef}
      />
      <AiOutlineClose
        onClick={() => toggleState("headerSearch")}
        className="text-3xl hover:text-primary-hover cursor-pointer"
      />
    </form>
  );
}
