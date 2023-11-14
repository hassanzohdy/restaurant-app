import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import WishListPage from "./pages/WishListPage";

publicRoutes([
  {
    path: URLS.wishList,
    component: WishListPage,
  },
]);
