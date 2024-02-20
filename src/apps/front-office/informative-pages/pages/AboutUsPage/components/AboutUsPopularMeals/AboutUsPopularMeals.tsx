import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import { popularDishesAtom } from "apps/front-office/home/atoms/popular-dishes-atom";
import { getHome } from "apps/front-office/home/services/home-service";
import { useState } from "react";
import { toastError } from "shared/hooks/useToastMessage";
import PopularMealItem from "./PopularMealItem";

export default function AboutUsPopularMeals() {
  const [data, setData] = useState(popularDishesAtom.use("meals") || null);
  const [loading, setLoading] = useState(true);

  if (popularDishesAtom.use("meals")) {
    useOnce(() => {
      getHome()
        .then(response => {
          setData(response.data.popularMeals);
          popularDishesAtom.change("meals", response.data.popularMeals);
          setLoading(false);
        })
        .catch(_error => {
          toastError(_error || trans("someThingWantWrong"));
        });
    });
  }

  if (loading) {
    <Loader />;
  }

  return (
    <>
      <section className="about-popular-meals pt-[80px] pb-[100px] max-xl:pt-[40px] max-lg:pb-[80px] max-md:pt-[80px]  max-sm:py-[70px]">
        {data.slice(6, 9).map(meal => (
          <PopularMealItem key={meal.id} meal={meal} />
        ))}
      </section>
    </>
  );
}
