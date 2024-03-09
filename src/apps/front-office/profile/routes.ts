import { accountRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import BookAddresses from "./pages/UpdateProfileBookAddresses";
import ChangePassword from "./pages/ChangePassword";
import ProfilePage from "./pages/UpdateProfile";

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
