import { trans } from "@mongez/localization";
import searchFilter from "apps/front-office/design-system/hooks/handelSearchFilter";
import useResetStatesOnAction from "apps/front-office/design-system/hooks/useResetStatesOnAction";
import OverLay from "apps/front-office/design-system/layouts/OverLay";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useFocusOnToggle from "shared/hooks/useFocusOnToggle";
import HeaderSearchFilter from "../../../HeaderIcons/HeaderSearch/HeaderSearchFilter";
import { searchActiveBarAtom } from "../../activeBar-atom/activeBar-atom";

export default function ActiveBarSearchForm() {
  const isOpened = searchActiveBarAtom.use("opened");
  const inputRef = useRef<HTMLInputElement | null>(null);
  useResetStatesOnAction(searchActiveBarAtom);

  useFocusOnToggle(inputRef.current, isOpened);
  const { handelSearchInput, error } = searchFilter();

  return (
    <>
      <OverLay opened={isOpened} atom={searchActiveBarAtom} />
      <div
        className={`absolute px-5 py-1 z-100 w-full h-full bg-white transition-all ${
          !isOpened ? "translate-y-0 overflow-hidden" : "-translate-y-full"
        }`}>
        <HeaderSearchFilter />
        <div className="relative h-full">
          <input
            ref={inputRef}
            type="search"
            className="w-full h-full rtl:text-left px-2 outline-none border-primary-main border rounded-full "
            placeholder={trans("searchProducts")}
            onChange={e => handelSearchInput(e)}
          />
          <AiOutlineSearch className="absolute right-4 text-2xl top-[20%]" />
        </div>
        {error && (
          <div className="bg-white w-full absolute left-0 top-[100px] px-5 max-h-[67vh] overflow-auto rounded-md text-red-600 py-5">
            {error}
          </div>
        )}
      </div>
    </>
  );
}
