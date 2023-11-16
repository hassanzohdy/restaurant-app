import { RouterConfigurations } from "@mongez/react-router";
import App from "apps/front-office/App";
import { localeCodesList } from "apps/front-office/utils/localization";
import URLS from "apps/front-office/utils/urls";
import { productionBasePath } from "./flags";

export const routerConfigurations: RouterConfigurations = {
  strictMode: true,
  forceRefresh: true,
  basePath: productionBasePath,
  scrollToTop: "smooth",
  localization: {
    // hard reload is recommended if the application is large as it will make a full reload
    changeLanguageReloadMode: "hard",
    localeCodes: Object.keys(localeCodesList),
  },
  lazyLoading: {
    loaders: {
      app: (app: string) => {
        return import(`./../apps/${app}/${app}-provider.ts`);
      },
      module: (app: string, module: string) => {
        return import(`./../apps/${app}/${module}/provider.ts`);
      },
    },
  },
  notFound: {
    mode: "redirect",
    path: URLS.notFound,
  },
  rootComponent: App,
};
