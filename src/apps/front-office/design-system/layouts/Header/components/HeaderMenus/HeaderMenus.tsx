import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { IoIosArrowUp } from "react-icons/io";

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
        <li className="relative group flex flex-row items-center gap-1 cursor-pointer">
          <Link to="#" className="font-bold text-[16px] py-3 text-heading">
            {trans("page")}
          </Link>
          <IoIosArrowUp className="group-hover:rotate-180 transition-transform duration-500" />

          {/* page drop down list */}
          <div
            className="absolute h-0 w-0 overflow-hidden py-0 top-[60px] text-[1em] rounded-md
            font-normal leading-[1.5] bg-white shadow-list z-50 group-hover:w-[200px] 
            group-hover:py-[.5em] group-hover:h-[86px] transition-all duration-500">
            <Link
              to={URLS.faq}
              className="block hover:text-primary-hover text-[13px] py-[.6em] px-[30px] hover:bg-backgroundHover   ">
              {trans("faq")}
            </Link>
            <Link
              to={URLS.ourChefs}
              className="block hover:text-primary-hover text-[13px] py-[.6em] px-[30px] hover:bg-backgroundHover">
              {trans("ourTeams")}
            </Link>
          </div>
        </li>
        <li>
          <Link
            to={URLS.contactUs}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("contact")}
          </Link>
        </li>
      </ul>
    </div>
  );
}
