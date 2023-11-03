import { trans } from "@mongez/localization";
import { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useToggleState from "../../../../Hooks/HeaderStateHook";

export default function ActiveBarSearchForm() {
  const { state } = useToggleState();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (state.headerSearch && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [state.headerSearch]);
  return (
    <div
      className={`absolute px-5 z-30 w-full h-full bg-white transition-all ${
        !state.headerSearch ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="relative h-full">
        <input
          ref={inputRef}
          type="search"
          className="w-full h-full rtl:text-left px-5 outline-none border-primary-main border rounded-full "
          placeholder={trans("searchProducts")}
        />
        <AiOutlineSearch className="absolute right-4 text-2xl top-[20%]" />
      </div>
    </div>
  );
}
