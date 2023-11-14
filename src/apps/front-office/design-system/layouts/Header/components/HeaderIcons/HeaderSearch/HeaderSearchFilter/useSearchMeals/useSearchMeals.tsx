import { trans } from "@mongez/localization";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getSearchMeals } from "apps/front-office/menu/services/meals-service";
import { useEffect, useState } from "react";

export default function useSearchMeals(searchInput, isSearchOpened) {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (isSearchOpened) {
      getSearchMeals(searchInput)
        .then(response => {
          setMeals(response);
        })
        .catch(error => {
          setError(
            error.response?.data?.error ||
              error.message ||
              trans("somethingWentWrong"),
          );
        });
    }
  }, [isSearchOpened, searchInput]);

  return { meals, error };
}
