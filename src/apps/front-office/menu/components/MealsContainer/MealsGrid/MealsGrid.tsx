import MealCard from "apps/front-office/menu/pages/MealDetailsPage/components/MealCard";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

export type MealsGridProps = {
  meals: Meal[];
};
export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 pt-6 pl-9 pb-20">
      {meals.map(meal => (
        <MealCard meal={meal} key={meal.id} />
      ))}
    </div>
  );
}
