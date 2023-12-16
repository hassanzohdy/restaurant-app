import { atom } from "@mongez/react-atom";
import { Meal } from "../pages/MealDetailsPage/utils/types";

type FilteredMealsAtom = {
  meals: Meal[];
  filteredMealsList: Meal[];
  activeCategory: number;
  search: string;
  price: [number, number];
};

export const filteredMealsAtom = atom<FilteredMealsAtom>({
  key: "filteredMeals",
  beforeUpdate: value => {
    return value;
  },
  default: {
    meals: [],
    filteredMealsList: [],
    activeCategory: 0,
    search: "",
    price: [0, 0],
  },
});
