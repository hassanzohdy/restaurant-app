import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { burgerAtom } from "apps/front-office/design-system/layouts/Header/atoms/header-atoms";
import URLS from "apps/front-office/utils/urls";

export default function BurgerMenuList() {
  const handelLinkClick = () => {
    burgerAtom.close();
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
      <li>
        <Link
          to={URLS.contactUs}
          onClick={handelLinkClick}
          className="border-b border-headingTextColor block hover:text-primary-hover p-[7.5px]">
          {trans("contact")}
        </Link>
      </li>
      <li className="border-b border-headingTextColor">
        <Link
          to={URLS.faq}
          onClick={handelLinkClick}
          className=" block hover:text-primary-hover p-[7.5px]">
          {trans("faq")}
        </Link>
      </li>
    </ul>
  );
}
