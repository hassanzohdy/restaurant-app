import { atom } from "@mongez/react-atom";
import { GenericObject } from "@mongez/reinforcements";
import { type Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

export type TabCategory = {
  id: number;
  name: string;
  meals: Meal[];
};

type PopularDishesAtomOptions = {
  activeTab: number;
  tabs: TabCategory[];
  meals: Meal[];
  activeMeals: Meal[];
};

const collectTabsData = (meals: Meal[]) => {
  const categories: GenericObject = {};

  for (const meal of meals) {
    if (!categories[meal.category.id]) {
      categories[meal.category.id] = {
        id: meal.category.id,
        name: meal.category.name,
        meals: [],
      };
    }

    categories[meal.category.id].meals.push(meal);
  }

  return Object.values(categories) as TabCategory[];
};

export const popularDishesAtom = atom<PopularDishesAtomOptions>({
  key: "popularDishes",
  beforeUpdate(data) {
    if (data.tabs.length === 0) {
      data.tabs = collectTabsData(data.meals);
    }

    if (data.activeTab === 0) {
      data.activeMeals = data.meals;
    } else {
      data.activeMeals =
        data.tabs.find(tab => tab.id === data.activeTab)?.meals ?? [];
    }

    return data;
  },
  default: {
    activeTab: 0, // all categories
    tabs: [],
    meals: [],
    activeMeals: [],
  },
});
