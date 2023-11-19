import useResetStatesOnAction from "../../Hooks/useResetStatesOnAction";
import { toggleGroupAtom } from "../../atoms/header-atoms";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderCart from "./HeaderCart";
import UserIcon from "./HeaderUser/UserIcon";
import LanguageSwitch from "./LanguageSwitch";
import Wishlist from "./Wishlist";

export default function HeaderIcons() {
  const { handleClickOutsideRef } = useResetStatesOnAction(toggleGroupAtom);

  return (
    <div className="hidden lg:flex gap-4 popups" ref={handleClickOutsideRef}>
      <LanguageSwitch />
      <HeaderSearch />
      <UserIcon />
      <Wishlist />
      <HeaderCart />

    </div>
  );
}
