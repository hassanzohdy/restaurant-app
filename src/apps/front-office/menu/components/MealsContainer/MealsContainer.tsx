import { menuDisplayModeAtom } from "apps/front-office/menu/atoms/menu-display-mode-atom";
import { MealType } from "../../pages/MealDetailsPage/utils/types";
import MealsGrid from "./MealsGrid";
import MealsList from "./MealsList";

const meals: MealType[] = Array.from({ length: 10 }, (_, index) => ({
  id: index,
})) as MealType[];

export default function MealsContainer() {
  const displayMode = menuDisplayModeAtom.useValue();

  const Container = displayMode === "grid" ? MealsGrid : MealsList;

  return <Container meals={meals} />;
}
