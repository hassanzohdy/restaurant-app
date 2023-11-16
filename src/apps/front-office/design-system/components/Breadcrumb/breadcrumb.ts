import { trans } from "@mongez/localization";
import URLS from "apps/front-office/utils/urls";

export type Breadcrumb = {
  text: string;
  url: string;
};

export function breadcrumb(text: string, url: string) {
  return {
    text,
    url,
  };
}

export function withHomeBreadcrumb(breadcrumbs: Breadcrumb[]) {
  return [breadcrumb(trans("home"), URLS.home), ...breadcrumbs];
}
