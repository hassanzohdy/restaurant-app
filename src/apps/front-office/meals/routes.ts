import MealDetailsPage from "apps/front-office/meals/pages/MealDetailsPage";
import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";

publicRoutes([
  {
    path: URLS.menu.viewMealRoute,
    component: MealDetailsPage,
  },
]);
