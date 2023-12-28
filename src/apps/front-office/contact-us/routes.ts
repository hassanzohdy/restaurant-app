import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import ContactUsPage from "./pages/ContactUsPage";

publicRoutes([
  {
    path: URLS.contactUs,
    component: ContactUsPage,
  },
]);
