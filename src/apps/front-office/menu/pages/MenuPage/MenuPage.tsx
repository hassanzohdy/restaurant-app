import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import Loader, {
  Error,
} from "apps/front-office/design-system/components/Indicators/Indicators";
import MealsContainer from "apps/front-office/menu/components/MealsContainer";
import ViewDisplayMode from "apps/front-office/menu/components/ViewDisplayMode";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import Breadcrumb from "design-system/layouts/Breadcrumb";
import { useState } from "react";
import { filteredMealsAtom } from "../../atoms/filtered-meals-atom";
import MenuSidebar from "../../components/MenuSidebarSidebar";
import "./MenuPage.scss";

export default function MenuPage() {
  const [isLoading, setIsLoading] = useState(true);
  const meals = filteredMealsAtom.use("meals");

  const [mealsCategories, setMealsCategories] = useState<any>({});
  const [error, setError] = useState<any>(null);

  useOnce(() => {
    const category = queryString.get("cat");

    getMeals()
      .then(response => {
        getMealsCategoryCount(response.data.meals);
        filteredMealsAtom.change("meals", response.data.meals);
        filterMealsByCategory(category, response.data.meals);
      })
      .catch(error => {
        setError(
          error.response?.data?.error ||
            error.message ||
            trans("somethingWentWrong"),
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  function getMealsCategoryCount(meals: Meal[]) {
    const categoriesDic = {};

    meals.forEach(meal => {
      const catName = meal.category.name;

      if (!categoriesDic[catName]) {
        categoriesDic[catName] = 1;
        return;
      }

      categoriesDic[catName] += 1;
    });

    setMealsCategories(categoriesDic);
  }

  function filterMealsByCategory(cat: string, mealsList = meals) {
    if (!cat) {
      filteredMealsAtom.change("filteredMealsList", mealsList);
      return;
    }

    const filteredMeals = mealsList.filter(meal => meal.category.name === cat);
    filteredMealsAtom.change("filteredMealsList", filteredMeals);
  }

  return (
    <>
      <Helmet title={trans("menu")} />
      <Breadcrumb title="Menu" navItems={[{ name: "Menu" }]} />
      <div className="container">
        <div className="flex flex-row mt-12 mb-12">
          <div className="basis-1/4">
            <MenuSidebar
              onCategorySelect={filterMealsByCategory}
              categoriesDic={mealsCategories}
            />
          </div>
          <div className="basis-3/4 shopItems">
            <ViewDisplayMode />
            <MealsContainer />
          </div>
        </div>
      </div>
    </>
  );
}
