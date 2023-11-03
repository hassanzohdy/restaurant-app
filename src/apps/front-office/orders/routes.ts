import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

publicRoutes([
  {
    path: URLS.orders.list,
    component: OrdersPage,
  },
  {
    path: URLS.orders.viewOrderRoute,
    component: OrderDetailsPage,
  },
]);
