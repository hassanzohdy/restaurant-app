import { trans } from "@mongez/localization";
import searchFilter from "apps/front-office/design-system/hooks/handelSearchFilter";
import OverLay from "apps/front-office/design-system/layouts/OverLay";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useFocusOnToggle from "shared/hooks/useFocusOnToggle";
import {
  useHeaderState,
  useHeaderStateClose,
} from "../../../../../hooks/headerStateHook";
import useEscapeToClose from "../../../../../hooks/useEscapeToClose";
import HeaderSearchFilter from "./HeaderSearchFilter";

export default function HeaderSearchForm() {
  const opened = useHeaderState("headerSearch");
  const closeSearch = useHeaderStateClose("headerSearch");
  const { handelSearchInput, error } = searchFilter();

  const inputRef = useRef<HTMLInputElement | null>(null);

  useFocusOnToggle(inputRef.current, opened);

  useEscapeToClose(opened, closeSearch);

  return (
    <>
      <OverLay opened={opened} />
      <div
        className={`container bg-white w-full h-full flex items-center absolute top-0 left-0 transition-all z-50 duration-200 ${
          opened ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
        <input
          type="text"
          placeholder={trans("searchProducts")}
          className="w-full h-full outline-none border-none text-2xl"
          ref={inputRef}
          onChange={e => handelSearchInput(e)}
        />
        <AiOutlineClose
          onClick={closeSearch}
          className="text-3xl hover:text-primary-hover cursor-pointer"
        />
        <HeaderSearchFilter />
        {error && (
          <div className="bg-white w-full absolute left-0 top-[100px] px-5 max-h-[67vh] overflow-auto rounded-md text-red-600 py-5">
            {error}
          </div>
        )}
      </div>
    </>
  );
}
