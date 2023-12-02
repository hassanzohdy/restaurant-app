import { atom } from "@mongez/react-atom";
import { Meal } from "../pages/MealDetailsPage/utils/types";

type FilteredMealsAtom = {
  meals: Meal[];
  filteredMealsList: Meal[];
};

export const filteredMealsAtom = atom<FilteredMealsAtom>({
  key: "filteredMeals",
  default: {
    meals: [],
    filteredMealsList: [],
  },
});
