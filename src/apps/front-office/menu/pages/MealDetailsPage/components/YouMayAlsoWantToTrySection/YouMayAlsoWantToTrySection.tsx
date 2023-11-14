import { trans } from "@mongez/localization";
import SectionHeading from "apps/front-office/design-system/components/SectionHeading";
import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import MealCard from "../MealCard";

export default function YouMayAlsoWantToTrySection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const [meals, setMeals] = useState<MealType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const meal = mealAtom.useValue();

  const loadMeals = useCallback(() => {
    getMeals({
      category: meal.category?.id,
      limit: 4,
    })
      .then(response => {
        setMeals(response.data.meals);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, [meal]);

  useEffect(() => {
    if (inView) {
      loadMeals();
    }
  }, [inView, loadMeals]);

  if (isLoaded && meals.length === 0) return null;

  return (
    <div className="container">
      <div ref={ref} className=""></div>
      {inView && (
        <>
          <SectionHeading>{trans("youMayAlsoWant")}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 pt-8 pb-20">
            {meals.map((meal, index) => (
              <MealCard key={index} meal={meal} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
