import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderCart from "./HeaderCart";
import UserIcon from "./HeaderUser/UserIcon";
import LanguageSwitch from "./LanguageSwitch";
import Wishlist from "./Wishlist";

export default function HeaderIcons() {
  return (
    <div className="hidden lg:flex gap-4 popups">
      <LanguageSwitch />
      <HeaderSearch />
      <UserIcon />
      <Wishlist />
      <HeaderCart />
    </div>
  );
}
