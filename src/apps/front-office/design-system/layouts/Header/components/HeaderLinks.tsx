import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { IoIosArrowUp } from "react-icons/io";
import ShopDropDown from "./DropDown/ShopDropDown";

const HeaderLinks = () => {
  return (
    <div>
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
        <li className="relative group flex flex-row items-center gap-1">
          <Link
            to={URLS.meals}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("Shop")}
          </Link>
          <IoIosArrowUp className="group-hover:rotate-180 transition-transform duration-500" />

          {/* Link drop down list */}
          <ShopDropDown />
        </li>
        <li>
          <Link
            to={URLS.blog.list}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("Blog")}
          </Link>
        </li>
        <li className="relative group flex flex-row items-center gap-1">
          <Link to="#" className="font-bold text-[16px] py-3 text-heading">
            {trans("Page")}
          </Link>
          <IoIosArrowUp className="group-hover:rotate-180 transition-transform duration-500" />
          {/* page drop down list */}
          <div
            className="absolute h-0 w-0 overflow-hidden py-0 top-[60px] text-[1em] rounded-md
            font-normal leading-[1.5] bg-background shadow-list z-50 group-hover:w-[200px] 
            group-hover:py-[.5em] group-hover:h-[86px] transition-all duration-500">
            <Link
              to={URLS.faq}
              className="block hover:text-primary_hover text-[13px] py-[.6em] px-[30px] hover:bg-background_hover   ">
              {trans("Faq")}
            </Link>
            <Link
              to={URLS.ourChefs}
              className="block hover:text-primary_hover text-[13px] py-[.6em] px-[30px] hover:bg-background_hover">
              {trans("Our Teams")}
            </Link>
          </div>
        </li>
        <li>
          <Link
            to={URLS.contactUs}
            className="font-bold text-[16px] py-3 text-heading">
            {trans("Contact")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinks;
