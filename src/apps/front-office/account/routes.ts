import { reverseGuardedRoutes } from "../utils/router";
import URLS from "../utils/urls";
import Register from "./pages/Register";

reverseGuardedRoutes([
  {
    path: URLS.auth.register,
    component: Register,
  },
]);
