import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import SectionHeading from "apps/front-office/design-system/components/SectionHeading";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import { useCallback, useState } from "react";
import { mealAtom } from "../../atoms/meal-atom";
import { Meal } from "../../utils/types";
import MealCard from "../MealCard";

export default function YouMayAlsoWantToTrySection() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const meal = mealAtom.useValue();

  const loadMeals = useCallback(() => {
    getMeals({
      category: meal.category?.id,
      limit: 4,
      except: meal.id,
    })
      .then(response => {
        setMeals(response.data.meals);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, [meal]);

  useOnce(() => {
    loadMeals();
  });

  if (isLoaded && meals.length === 0) return null;

  return (
    <div className="container">
      <SectionHeading>{trans("youMayAlsoWant")}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 pt-8 pb-20">
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
}
