import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import OrdersPage from "./pages/OrdersPage";

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
