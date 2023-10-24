import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { AiOutlineHeart } from "react-icons/ai";
import HeaderCart from "./HeaderCart";
import HeaderSearch from "./HeaderSearch";
import UserIcon from "./HeaderUser/UserIcon";
import LanguageSwitch from "./LanguageSwitch";

export default function HeaderIcons() {
  return (
    <div className="hidden lg:flex gap-4">
      <LanguageSwitch />
      <HeaderSearch />
      <UserIcon />
      <div className="border border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary_hover">
        <Link to={URLS.wishlist}>
          <AiOutlineHeart />
        </Link>
      </div>
      <HeaderCart />
    </div>
  );
}
