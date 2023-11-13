import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import Loader, {
  Error,
} from "apps/front-office/design-system/components/Indicators/Indicators";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { useState } from "react";
import endpoint from "shared/endpoint";
import { getMeal } from "../../services/meals-service";
import { mealAtom } from "./atoms/meal-atom";
import DescriptionAndReviews from "./components/DescriptionAndReviews";
import MealDetailsSection from "./components/MealDetailsSection";
import MealsNavigateBtns from "./components/MealsNavigateBtns";
import YouMayAlsoWantToTrySection from "./components/YouMayAlsoWantToTrySection";

export type MealDetailsPageProps = {
  params: {
    id: string;
    slug: string;
  };
};

export default function MealDetailsPage({ params }: MealDetailsPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const meal = mealAtom.useValue();

  useOnce(() => {
    getMeal(params.id)
      .then(response => {
        mealAtom.update(response.data.meal);
        setError("Error updating");
      })
      .catch(error => {
        setError(
          error?.response?.data?.error ||
            error?.message ||
            trans("somethingWentWrong"),
        );
      })
      .finally(() => {
        setIsLoading(false);
      });

    const lastRequest = endpoint.getLastRequest();

    return () => {
      lastRequest?.abort();
    };
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Helmet
        title={meal.name}
        description={meal.description}
        image={meal.image.url}
      />
      <div className="relative">
        <Breadcrumb navItems={[{ name: meal.name }]} title={meal.name} />
        <MealsNavigateBtns meal={meal.id} />
      </div>
      <MealDetailsSection />
      <DescriptionAndReviews />
      <YouMayAlsoWantToTrySection />
    </>
  );
}
