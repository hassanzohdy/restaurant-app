import LoginPage from "apps/front-office/auth/pages/LoginPage";
import URLS from "apps/front-office/utils/urls";
import { hasOTPRoutes, reverseGuardedRoutes } from "../utils/router";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

reverseGuardedRoutes([
  {
    path: URLS.auth.register,
    component: Register,
  },
  {
    path: URLS.auth.login,
    component: LoginPage,
  },
  {
    path: URLS.auth.forgotPassword,
    component: ForgotPassword,
  },
]);

hasOTPRoutes([
  {
    path: URLS.auth.resetPassword,
    component: ResetPassword,
  },
]);
