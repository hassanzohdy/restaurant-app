import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { pageMenuList } from "apps/front-office/design-system/atoms/headerAtoms";
import URLS from "apps/front-office/utils/urls";
import { IoChevronUpOutline } from "react-icons/io5";

export default function BurgerMenuList() {
  const isOpened = pageMenuList.use("opened"); // any use call will cause a component re-render
  return (
    <ul className="flex flex-col w-full">
      <li>
        <Link
          to={URLS.home}
          className="border-b border-headingTextColor block  hover:text-primary-hover p-[7.5px]">
          {trans("Home")}
        </Link>
      </li>
      <li>
        <Link
          to={URLS.menu.list}
          className="border-b border-headingTextColor block hover:text-primary-hover p-[7.5px]">
          {trans("Menu")}
        </Link>
      </li>
      <li>
        <Link
          to={URLS.aboutUs}
          className="border-b border-headingTextColor block hover:text-primary-hover p-[7.5px]">
          {trans("About")}
        </Link>
      </li>
      <li className="border-b border-headingTextColor">
        <div className="flex flex-row items-center justify-between">
          <Link
            to={URLS.aboutUs}
            className=" block hover:text-primary-hover p-[7.5px]">
            {trans("shop")}
          </Link>
          <div className="hover:bg-primary-hover py-2 px-3 text-white rounded-md cursor-pointer"></div>
        </div>
      </li>
      <li className="flex flex-row justify-between items-center border-b border-headingTextColor ">
        <Link
          to={URLS.aboutUs}
          className="block hover:text-primary-hover p-[7.5px]">
          {trans("blog")}
        </Link>
      </li>
      <li className="border-b border-headingTextColor">
        <div className="flex flex-row items-center  justify-between">
          <Link
            to={URLS.aboutUs}
            className=" block hover:text-primary-hover p-[7.5px]">
            {trans("page")}
          </Link>
          <div
            onClick={pageMenuList.toggle}
            className={`hover:bg-primary-hover py-2 px-3 text-white rounded-md cursor-pointer`}>
            <IoChevronUpOutline
              className={`transition-all ${
                isOpened ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
        <div
          className={`ltr:ml-4 rtl:mr-4 overflow-hidden transition-all ${
            isOpened ? "h-[90px]" : "h-[0px]"
          }`}>
          <ul>
            <li className="border-b border-headingTextColor">
              <Link
                to={URLS.aboutUs}
                className=" block hover:text-primary-hover p-[7.5px]">
                {trans("faq")}
              </Link>
            </li>
            <li>
              <Link
                to={URLS.aboutUs}
                className=" block hover:text-primary-hover p-[7.5px]">
                {trans("ourTeams")}
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link
          to={URLS.aboutUs}
          className="border-b border-headingTextColor block hover:text-primary-hover p-[7.5px]">
          {trans("contact")}
        </Link>
      </li>
    </ul>
  );
}
