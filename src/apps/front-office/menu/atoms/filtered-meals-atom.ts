import { atom, openAtom } from "@mongez/react-atom";
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
  beforeUpdate: data => {
    const { search, activeCategory, meals, price } = data;

    if (!search && !activeCategory && !price[0] && !price[1]) {
      data.filteredMealsList = [...meals];
    } else {
      data.filteredMealsList = meals.filter(meal => {
        // filter by search text
        if (search) {
          const found = meal.name.match(new RegExp(search, "i"));

          if (!found) return false;
        }

        // filter by category
        if (activeCategory) {
          if (meal.category.id !== activeCategory) return false;
        }

        // filter by price
        if (price[0] && price[1]) {
          const mealPrice = meal.price;
          const minPrice = price[0];
          const maxPrice = price[1];

          if (mealPrice < minPrice) return false;

          if (mealPrice > maxPrice) return false;
        }

        return true;
      });
    }

    return data;
  },
  default: {
    meals: [],
    filteredMealsList: [],
    activeCategory: 0,
    search: "",
    price: [0, 0],
  },
});

export const toggleFilterAtom = openAtom("toggle filter");
