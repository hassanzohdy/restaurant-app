import { popularDishesAtom } from "app/home/atoms/popular-dishes-atom";
import MealsGrid from "app/menu/components/MealsContainer/MealsGrid";

export type PopularDishesItemProps = {
  children: React.ReactNode;
};

export default function PopularDishesItem() {
  const meals = popularDishesAtom.use("activeMeals");
  meals.length = 8;

  return <MealsGrid meals={meals} />;
}
