import { menuDisplayModeAtom } from "apps/front-office/menu/atoms/menu-display-mode-atom";
import { filteredMealsAtom } from "../../atoms/filtered-meals-atom";
import MealsGrid from "./MealsGrid";
import MealsList from "./MealsList";

export default function MealsContainer() {
  const meals = filteredMealsAtom.use("filteredMealsList");
  const displayMode = menuDisplayModeAtom.useValue();

  const Container = displayMode === "grid" ? MealsGrid : MealsList;

  return <Container meals={meals} />;
}
