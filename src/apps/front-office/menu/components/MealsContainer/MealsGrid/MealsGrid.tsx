import PopularDishes from "apps/front-office/home/pages/HomePage/PopularDishes";
import { MealType } from "apps/front-office/meals/pages/MealDetailsPage/utils/types";

export type MealsGridProps = {
  meals: MealType[];
};
export default function MealsGrid({
  meals: _unused_meals_yet,
}: MealsGridProps) {
  return (
    <>
      <PopularDishes />
    </>
  );
}
