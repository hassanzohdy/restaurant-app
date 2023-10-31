import { publicRoutes } from "../utils/router";
import URLS from "../utils/urls";
import AboutUsPage from "./pages/AboutUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

publicRoutes([
  {
    path: URLS.aboutUs,
    component: AboutUsPage,
  },
  {
    path: URLS.privacyPolicy,
    component: PrivacyPolicyPage,
  },
  {
    path: URLS.termsAndConditions,
    component: TermsAndConditionsPage,
  },
]);
