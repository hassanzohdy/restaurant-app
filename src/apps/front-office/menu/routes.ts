import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import MenuPage from "./pages/MenuPage/MenuPage";

publicRoutes([
  {
    path: URLS.menu.list,
    component: MenuPage,
  },
]);
