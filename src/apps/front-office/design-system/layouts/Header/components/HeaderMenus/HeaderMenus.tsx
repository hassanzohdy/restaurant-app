import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";

export default function HeaderMenus() {
  return (
    <div className="hidden lg:block">
      <ul className="flex flex-row justify-between gap-6 items-center">
        <li>
          <Link
            to={URLS.home}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("Home")}
          </Link>
        </li>
        <li>
          <Link
            to={URLS.menu.list}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("Menu")}
          </Link>
        </li>
        <li>
          <Link
            to={URLS.aboutUs}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("About")}
          </Link>
        </li>
        <li>
          <Link
            to={URLS.blog.list}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("blog")}
          </Link>
        </li>
        <li>
          <Link
            to={URLS.contactUs}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("contact")}
          </Link>
        </li>
        <li className="relative group flex flex-row items-center gap-1 cursor-pointer">
          {" "}
          <Link
            to={URLS.faq}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("faq")}
          </Link>
        </li>
      </ul>
    </div>
  );
}
