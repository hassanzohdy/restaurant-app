import { Atom, atom, openAtom } from "@mongez/react-atom";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

export const scrollAtom: Atom = atom({
  key: "scroll",
  default: 0,
});

export const burgerAtom = openAtom("openAtom");

export const toggleGroupAtom: Atom = atom({
  key: "ToggleHeaderIcons",
  default: {
    headerSearch: false,
    userIcon: false,
    cartIcon: false,
  },
});

export const searchInputAtom: Atom = atom({
  key: "searchInput",
  default: "",
});

export const searchMealsAtom = atom<MealType[]>({
  key: "searchMeals",
  default: [],
});
