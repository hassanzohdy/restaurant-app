import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import MealDetailsPage from "./pages/MealDetailsPage";
import MenuPage from "./pages/MenuPage/MenuPage";

publicRoutes([
  {
    path: URLS.menu.list,
    component: MenuPage,
  },
  { path: URLS.menu.viewMealRoute, component: MealDetailsPage },
]);
