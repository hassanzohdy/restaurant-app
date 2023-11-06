import Helmet from "@mongez/react-helmet";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import DescriptionAndReviews from "./components/DescriptionAndReviews";
import MealDetailsSection from "./components/MealDetailsSection";
import MealsNavigateBtns from "./components/MealsNavigateBtns";
import YouMayAlsoWantToTrySection from "./components/YouMayAlsoWantToTrySection";
import { meal } from "./components/YouMayAlsoWantToTrySection/YouMayAlsoWantToTrySection";

// export type MealDetailsPageProps = {
//   params: {
//     id: string;
//     slug: string;
//   };
// };

export default function MealDetailsPage() {
  return (
    <>
      <Helmet
        title={meal.title}
        description={meal.shortDescription}
        image={meal.image}
      />
      <div className="relative">
        <Breadcrumb navItems={[{ name: meal.title }]} title={meal.title} />
        <MealsNavigateBtns nextMeal={meal.nextMeal} prevMeal={meal.prevMeal} />
      </div>
      <MealDetailsSection meal={meal} />
      <DescriptionAndReviews
        description={meal.description}
        ingredients={meal.ingredients}
        reviews={meal.reviews}
      />
      <YouMayAlsoWantToTrySection />
    </>
  );
}
