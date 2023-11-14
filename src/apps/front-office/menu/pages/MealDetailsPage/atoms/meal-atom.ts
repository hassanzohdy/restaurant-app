import { atom } from "@mongez/react-atom";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

export const mealAtom = atom<MealType>({
  key: "meal",
  default: {},
});
