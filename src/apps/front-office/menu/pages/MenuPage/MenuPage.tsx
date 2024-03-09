import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import Loader, {
  Error,
} from "apps/front-office/design-system/components/Indicators/Indicators";
import OverLay from "apps/front-office/design-system/layouts/OverLay";
import { cn } from "apps/front-office/design-system/utils/cn";
import MealsContainer from "apps/front-office/menu/components/MealsContainer";
import ViewDisplayMode from "apps/front-office/menu/components/ViewDisplayMode";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import Breadcrumb from "design-system/layouts/Breadcrumb";
import { useState } from "react";
import {
  filteredMealsAtom,
  toggleFilterAtom,
} from "../../atoms/filtered-meals-atom";
import MenuSidebar, {
  type MenuSidebarProps,
} from "../../components/MenuSidebarSidebar";
import "./MenuPage.scss";

export default function MenuPage() {
  const [isLoading, setIsLoading] = useState(true);
  const meals = filteredMealsAtom.use("meals");
  const filterOpened = toggleFilterAtom.use("opened");

  const [error, setError] = useState<any>(null);
  const [sidebarData, setSidebarData] = useState<MenuSidebarProps>({
    categories: [],
    price: [0, 0],
  });

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
    const categoriesObj = {};
    let minPrice = 0;
    let maxPrice = 0;

    meals.forEach(meal => {
      const catId = meal.category.id;

      if (!minPrice) {
        minPrice = meal.price;
      } else if (meal.price < minPrice) {
        minPrice = meal.price;
      }

      if (!maxPrice) {
        maxPrice = meal.price;
      } else if (meal.price > maxPrice) {
        maxPrice = meal.price;
      }

      if (!categoriesObj[catId]) {
        categoriesObj[catId] = {
          ...meal.category,
          total: 1,
        };
        return;
      }

      categoriesObj[catId].total += 1;
    });

    setSidebarData({
      categories: Object.values(categoriesObj),
      price: [minPrice, maxPrice],
    });
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
      <Breadcrumb title={trans("menu")} navItems={[{ name: trans("menu") }]} />
      <OverLay atom={toggleFilterAtom} opened={filterOpened} />
      <div className="container">
        <div className="md:flex md:flex-row md:justify-between md:gap-12 md:my-12">
          <div
            className={cn(
              "md:basis-1/4 md:mt-7 md:visible md:block md:z-0 z-[60] top-0 h-screen fixed md:relative rtl:right-0 ltr:left-0 w-10/12 sm:w-1/2 md:w-1/3 bg-white p-[10px] transition-all ",
              !filterOpened
                ? "ltr:-translate-x-full rtl:translate-x-full md:!translate-x-0"
                : "translate-x-0 shadow-list md:shadow-none",
            )}>
            <MenuSidebar
              categories={sidebarData.categories}
              price={sidebarData.price}
            />
          </div>
          <div className="md:basis-3/4 mt-5 md:mt-0">
            <ViewDisplayMode />
            <MealsContainer />
          </div>
        </div>
      </div>
    </>
  );
}
