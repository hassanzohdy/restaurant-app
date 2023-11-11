import { trans } from "@mongez/localization";
import SectionHeading from "apps/front-office/design-system/components/SectionHeading";
import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import { useState } from "react";
import MealCard from "../MealCard";

export default function YouMayAlsoWantToTrySection() {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const meal = mealAtom.useValue();

  if (isLoaded && meals.length === 0) return null;

  const _loadMeals = () => {
    getMeals({
      category: meal.category.id,
      except: meal.id,
      limit: 6,
    })
      .then(response => {
        setMeals(response.data.meals);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  // useOnce(() => {
  //   _loadMeals();
  // });

  // TODO: when element is visible, load meals

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
