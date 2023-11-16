import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { AiOutlineHeart } from "react-icons/ai";
import useResetStatesOnAction from "../../Hooks/useResetStatesOnAction";
import { toggleGroupAtom } from "../../atoms/header-atoms";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderCart from "./HeaderCart";
import UserIcon from "./HeaderUser/UserIcon";
import LanguageSwitch from "./LanguageSwitch";

export default function HeaderIcons() {
  const { handleClickOutsideRef } = useResetStatesOnAction(toggleGroupAtom);

  return (
    <div className="hidden lg:flex gap-4 popups" ref={handleClickOutsideRef}>
      <LanguageSwitch />
      <HeaderSearch />
      <UserIcon />
      <Link
        className="border border-border cursor-pointer rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover"
        to={URLS.wishlist}>
        <AiOutlineHeart />
      </Link>
      <HeaderCart />
    </div>
  );
}
