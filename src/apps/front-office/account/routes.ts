import URLS from "apps/front-office/utils/urls";
import { reverseGuardedRoutes } from "../utils/router";
import LoginPage from "apps/front-office/account/pages/LoginPage";
reverseGuardedRoutes([
  {
  path: URLS.auth.login, 
  component: LoginPage,
  },
]);