import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import HeaderDropdownMenu from "../HeaderDropdownMenu";
import { IconChevronDown } from "@tabler/icons-react";

export type HeaderMenus = {
  opened: boolean
};

export default function HeaderMenus({opened}: HeaderMenus)  {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  type navigationType = {
    name: string,
    href: string,
    current: boolean,
    dropdown: boolean,
    dropdownItems?: {
      name: string,
      href: string,
    }[]
  }[] 
  
  const navigation: navigationType = [
    { name: `${trans("home")}`, href: `${URLS.home}`, current: true, dropdown: false },
    { 
      name: `${trans("menu")}`, 
      href: `${URLS.menu}`, 
      current: false, 
      dropdown: true, 
      dropdownItems: [
        { name: `${trans("menu item 1")}`, href: "#" },
        { name: `${trans("menu item 2")}`, href: "#" },
        { name: `${trans("menu item 3")}`, href: "#" },
        { name: `${trans("menu item 4")}`, href: "#" },
      ]
    },
    { name: `${trans("about")}`, href: `${URLS.aboutUs}`, current: false, dropdown: false },
    { name: `${trans("blog")}`, href: `${URLS.blog}`, current: false, dropdown: false },
    { name: `${trans("contactUs")}`, href: `${URLS.contactUs}`, current: false, dropdown: false },
  ]
  
  return (
    <>
      <ul className={`navbar-menu flex items-center h-full ${opened ? "show" : ''}`}>
        {navigation.map((item) => (
          <li className={
            classNames(
            item.current ? "current-menu-item menu-item" : "menu-item",
            item.dropdown ? "dropdown" : ""
          )
        } key={item.name}
          >
            <Link
              key={item.name}
              to={item.href}
              className="menu-link"
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}  {item.dropdown ? <IconChevronDown stroke="3"/> : ""}
            </Link>
            {item.dropdown ? <HeaderDropdownMenu items={item.dropdownItems}/> : ""}
          </li>
        ))}
      </ul>
    </>
  );
}
