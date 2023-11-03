import { trans } from "@mongez/localization";
import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useToggleState from "../../../Hooks/HeaderStateHook";

export default function HeaderSearchForm() {
  const { state, toggleState } = useToggleState();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (state.headerSearch && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [state.headerSearch]);

  return (
    <form
      className={`w-full h-full flex items-center absolute top-0 left-0 transition-all z-50 duration-200 ${
        state.headerSearch ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
      <input
        type="text"
        placeholder={trans("searchProducts")}
        className="w-full h-full outline-none px-10 border-none text-2xl"
        ref={inputRef}
      />
      <AiOutlineClose
        onClick={() => toggleState("headerSearch")}
        className="text-3xl hover:text-primary-hover cursor-pointer"
      />
    </form>
  );
}
