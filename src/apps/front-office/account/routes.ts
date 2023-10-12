import LoginPage from "apps/front-office/account/pages/LoginPage";
import URLS from "apps/front-office/utils/urls";
import { reverseGuardedRoutes } from "../utils/router";
import Register from "./pages/Register";

reverseGuardedRoutes([
  {
    path: URLS.auth.register,
    component: Register,
  },
  {
    path: URLS.auth.login,
    component: LoginPage,
  },
]);
