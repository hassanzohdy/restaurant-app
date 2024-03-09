import { accountRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import ChangePassword from "./pages/ChangePassword";
import ProfilePage from "./pages/UpdateProfile";
import BookAddresses from "./pages/UpdateProfileBookAddresses";

accountRoutes([
  {
    path: URLS.account.updateProfile,
    component: ProfilePage,
  },
  {
    path: URLS.account.changePassword,
    component: ChangePassword,
  },
  {
    path: URLS.account.addressBook,
    component: BookAddresses,
  },
]);
