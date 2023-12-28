import ListMealCard from "apps/front-office/menu/components/ListMealCard";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

export type MealsListProps = {
  meals: Meal[];
};

export default function MealsList({ meals }: MealsListProps) {
  return (
    <div className="flex flex-col">
      {meals.map(meal => {
        return <ListMealCard key={meal.id} meal={meal} />;
      })}
    </div>
  );
}
