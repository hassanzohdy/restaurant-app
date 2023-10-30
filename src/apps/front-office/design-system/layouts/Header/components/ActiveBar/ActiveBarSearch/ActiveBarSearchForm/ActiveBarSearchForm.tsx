import { trans } from "@mongez/localization";
import { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useToggleStateActiveBar } from "../../../../Hooks/HeaderStateHook";

export default function ActiveBarSearchForm() {
  const { groupStateActiveBar } = useToggleStateActiveBar();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (groupStateActiveBar.headerSearch && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [groupStateActiveBar.headerSearch]);
  return (
    <div
      className={`absolute px-5 z-30 w-full h-full bg-white transition-all ${
        !groupStateActiveBar.headerSearch
          ? "translate-y-0"
          : "-translate-y-full"
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
