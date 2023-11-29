import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import Loader, {
  Error,
} from "apps/front-office/design-system/components/Indicators/Indicators";
import MealsContainer from "apps/front-office/menu/components/MealsContainer";
import ViewDisplayMode from "apps/front-office/menu/components/ViewDisplayMode";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import Breadcrumb from "design-system/layouts/Breadcrumb";
import { useState } from "react";
import MenuSidebar from "../../components/MenuSidebarSidebar";
import "./MenuPage.scss";

export default function MenuPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [MealsCategories, setMealsCategories] = useState<any>({});
  const [error, setError] = useState<any>(null);

  useOnce(() => {
    getMeals()
      .then(response => {
        setMeals(response.data.meals);
        setFilteredMeals(response.data.meals);
        getMealsCategoryCount(response.data.meals);
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
    //This function is called directly after getting meals from Api
    //It returns a dictionary with each category as a key and count of meals as value
    const categoryDictionary = {};
    meals.forEach(meal => {
      categoryDictionary[meal.category.name]
        ? (categoryDictionary[meal.category.name] += 1)
        : (categoryDictionary[meal.category.name] = 1);
    });
    setMealsCategories(categoryDictionary);
  }

  function filterMealsByCategory(cat: string) {
    const filteredMeals = meals.filter(meal => meal.category.name === cat);
    setFilteredMeals(filteredMeals);
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
              categories={MealsCategories}
            />
          </div>
          <div className="basis-3/4 shopItems">
            <ViewDisplayMode />
            <MealsContainer meals={filteredMeals} />
          </div>
        </div>
      </div>
    </>
  );
}
