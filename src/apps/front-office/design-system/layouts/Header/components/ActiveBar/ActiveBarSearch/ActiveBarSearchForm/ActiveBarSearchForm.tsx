import { trans } from "@mongez/localization";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useFocusOnToggle from "shared/hooks/useFocusOnToggle";
import { searchActiveBarAtom } from "../../activebar-atom/acivebar-atom";

export default function ActiveBarSearchForm() {
  const isOpened = searchActiveBarAtom.use("opened");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useFocusOnToggle(inputRef.current, isOpened);

  return (
    <div
      className={`absolute px-5 z-30 w-full h-full bg-white transition-all ${
        !isOpened ? "translate-y-0" : "-translate-y-full"
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
