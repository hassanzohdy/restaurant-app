import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import FaqPage from "./pages/FaqPage";

publicRoutes([
  {
    path: URLS.faq,
    component: FaqPage,
  },
]);
