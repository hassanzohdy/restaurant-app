import { trans } from "@mongez/localization";
import { GenericObject, debounce } from "@mongez/reinforcements";
import { searchMealsAtom } from "apps/front-office/design-system/atoms/header-atoms";
import OverLay from "apps/front-office/design-system/layouts/OverLay";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useFocusOnToggle from "shared/hooks/useFocusOnToggle";
import {
  useHeaderState,
  useHeaderStateClose,
} from "../../../../../hooks/headerStateHook";
import useEscapeToClose from "../../../../../hooks/useEscapeToClose";
import HeaderSearchFilter from "./HeaderSearchFilter";

const searchResults: GenericObject = {}; // not with SSR

export default function HeaderSearchForm() {
  const opened = useHeaderState("headerSearch");
  const closeSearch = useHeaderStateClose("headerSearch");

  const [error, setError] = useState();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useFocusOnToggle(inputRef.current, opened);

  useEscapeToClose(opened, closeSearch);

  const handelSearchInput = debounce(e => {
    const value = e.target.value.trim();

    if (!value) {
      searchMealsAtom.update([]);
      return;
    }

    if (!searchResults[value]) {
      getMeals({
        name: value,
      })
        .then(response => {
          const meals = response.data.meals;
          searchMealsAtom.update(meals);
          searchResults[value] = meals;
        })
        .catch(error => {
          setError(
            error?.response?.data?.error ||
              error?.message ||
              trans("somethingWentWrong"),
          );
        });
    } else {
      searchMealsAtom.update(searchResults[value]);
    }
  }, 350);

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
