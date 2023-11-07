import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { burgerAtom } from "apps/front-office/design-system/layouts/Header/atoms/header-atoms";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function BurgerMenuList() {
  const [pageList, setPageList] = useState(false);
  const handelLinkClick = () => {
    burgerAtom.close();
    setPageList(false);
  };
  return (
    <ul className="flex flex-col w-full">
      <li>
        <Link
          to={URLS.home}
          onClick={handelLinkClick}
          className="border-b border-headingTextColor block  hover:text-primary-hover p-[7.5px]">
          {trans("Home")}
        </Link>
      </li>
      <li>
        <Link
          to={URLS.menu.list}
          onClick={handelLinkClick}
          className="border-b border-headingTextColor block hover:text-primary-hover p-[7.5px]">
          {trans("Menu")}
        </Link>
      </li>
      <li>
        <Link
          to={URLS.aboutUs}
          onClick={handelLinkClick}
          className="border-b border-headingTextColor block hover:text-primary-hover p-[7.5px]">
          {trans("About")}
        </Link>
      </li>
      <li className="flex flex-row justify-between items-center border-b border-headingTextColor ">
        <Link
          to={URLS.blog.list}
          onClick={handelLinkClick}
          className="block hover:text-primary-hover p-[7.5px]">
          {trans("blog")}
        </Link>
      </li>
      <li className="border-b border-headingTextColor">
        <div
          className="flex flex-row items-center  justify-between"
          onClick={() => setPageList(prev => !prev)}>
          <p className=" block hover:text-primary-hover p-[7.5px]">
            {trans("page")}
          </p>
          <div
            className={`hover:bg-primary-hover py-2 px-3 text-white rounded-md cursor-pointer`}>
            <IoChevronDownOutline
              className={`transition-all ${
                pageList ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
        <div
          className={`ltr:ml-4 rtl:mr-4 overflow-hidden transition-all ${
            pageList ? "h-[90px]" : "h-[0px]"
          }`}>
          <ul>
            <li className="border-b border-headingTextColor">
              <Link
                to={URLS.faq}
                onClick={handelLinkClick}
                className=" block hover:text-primary-hover p-[7.5px]">
                {trans("faq")}
              </Link>
            </li>
            <li>
              <Link
                to={URLS.ourChefs}
                onClick={handelLinkClick}
                className=" block hover:text-primary-hover p-[7.5px]">
                {trans("ourTeams")}
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link
          to={URLS.contactUs}
          onClick={handelLinkClick}
          className="border-b border-headingTextColor block hover:text-primary-hover p-[7.5px]">
          {trans("contact")}
        </Link>
      </li>
    </ul>
  );
}
