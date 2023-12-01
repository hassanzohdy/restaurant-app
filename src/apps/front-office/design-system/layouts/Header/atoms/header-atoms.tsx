import { atom, openAtom } from "@mongez/react-atom";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

export const scrollAtom = atom({
  key: "scroll",
  default: 0,
});

export const burgerAtom = openAtom("openAtom");

export type HeaderState = {
  headerSearch: boolean;
  userIcon: boolean;
  cartIcon: boolean;
};

export const headerStateAtom = atom<HeaderState>({
  key: "headerState",
  default: {
    headerSearch: false,
    userIcon: false,
    cartIcon: false,
  },
});

export const searchInputAtom = atom({
  key: "searchInput",
  default: "",
});

export const searchMealsAtom = atom<Meal[]>({
  key: "searchMeals",
  default: [],
});

export const wishListAtom = atom({
  key: "wishListAtom",
  default: 0,
});
