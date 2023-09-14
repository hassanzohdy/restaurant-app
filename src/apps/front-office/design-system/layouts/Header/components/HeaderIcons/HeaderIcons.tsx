import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { AiFillHeart } from "react-icons/ai";
import UserIcon from "../DropDown/DropDown/UserIcon";
import HeaderCart from "./HeaderCart";
import HeaderSearch from "./HeaderSearch";

export default function HeaderIcons() {
  return (
    <div className="hidden lg:flex gap-4">
      <HeaderSearch />
      <UserIcon />
      <div className="border border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary_hover">
        <Link to={URLS.wishlist}>
          <AiFillHeart />
        </Link>
      </div>
      <HeaderCart />
    </div>
  );
}
