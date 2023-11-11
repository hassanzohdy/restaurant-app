import { menuDisplayModeAtom } from "apps/front-office/menu/atoms/menu-display-mode-atom";
import { MealType } from "../../pages/MealDetailsPage/utils/types";
import MealsGrid from "./MealsGrid";
import MealsList from "./MealsList";

export type MealsContainerProps = {
  meals: MealType[];
};

export default function MealsContainer({ meals }: MealsContainerProps) {
  const displayMode = menuDisplayModeAtom.useValue();

  const Container = displayMode === "grid" ? MealsGrid : MealsList;

  return <Container meals={meals} />;
}
