import { trans } from "@mongez/localization";
import { GenericObject, debounce } from "@mongez/reinforcements";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import { useState } from "react";
import { searchMealsAtom } from "../atoms/header-atoms";
const searchResults: GenericObject = {}; // not with SSR

export default function searchFilter() {
  const [error, setError] = useState();

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
  return {
    handelSearchInput,
    error,
  };
}
