import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import ShopPage from "./pages/ShopPage";

publicRoutes([
  {
    path: URLS.shop,
    component: ShopPage,
  },
]);
