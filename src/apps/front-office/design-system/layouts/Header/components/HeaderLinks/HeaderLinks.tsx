import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import { cn } from "apps/front-office/design-system/utils/cn";
import URLS from "apps/front-office/utils/urls";
import useGetBaseRoute from "shared/hooks/useGetBaseRoute";

export default function HeaderLinks() {
  const basePath = useGetBaseRoute(current("route"));

  return (
    <div className="hidden lg:block">
      <ul className="flex flex-row justify-between gap-6 items-center">
        <li>
          <Link
            to={URLS.home}
            className={cn(
              "font-bold text-[16px] py-1 text-heading hover:text-primary-hover",
              basePath === URLS.home && "text-primary-main",
            )}>
            {trans("home")}
          </Link>
        </li>
        <li>
          <Link
            to={URLS.menu.list}
            className={cn(
              "font-bold text-[16px] py-1 text-heading hover:text-primary-hover",
              basePath === URLS.menu.list && "text-primary-main",
            )}>
            {trans("menu")}
          </Link>
        </li>
        <li>
          <Link
            to={URLS.aboutUs}
            className={cn(
              "font-bold text-[16px] py-1 text-heading hover:text-primary-hover",
              basePath === URLS.aboutUs && "text-primary-main",
            )}>
            {trans("about")}
          </Link>
        </li>
        <li>
          <Link
            to={URLS.blog.list}
            className={cn(
              "font-bold text-[16px] py-1 text-heading hover:text-primary-hover",
              basePath === URLS.blog.list && "text-primary-main",
            )}>
            {trans("blog")}
          </Link>
        </li>
        <li>
          <Link
            to={URLS.contactUs}
            className={cn(
              "font-bold text-[16px] py-1 text-heading hover:text-primary-hover",
              basePath === URLS.contactUs && "text-primary-main",
            )}>
            {trans("contactUs")}
          </Link>
        </li>
        <li className="relative group flex flex-row items-center gap-1 cursor-pointer">
          {" "}
          <Link
            to={URLS.faq}
            className={cn(
              "font-bold text-[16px] py-1 text-heading hover:text-primary-hover",
              basePath === URLS.faq && "text-primary-main",
            )}>
            {trans("faq")}
          </Link>
        </li>
      </ul>
    </div>
  );
}
