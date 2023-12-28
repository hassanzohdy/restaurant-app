import { atom } from "@mongez/react-atom";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

export const mealAtom = atom<Meal>({
  key: "meal",
  default: {},
});
