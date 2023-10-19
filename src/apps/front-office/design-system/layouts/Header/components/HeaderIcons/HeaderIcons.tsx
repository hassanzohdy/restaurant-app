import { Link, routerEvents } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ToggleAtom } from "../../atoms/HeaderAtoms";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderCart from "./HeaderCart";
import UserIcon from "./HeaderUser/UserIcon";
import LanguageSwitch from "./LanguageSwitch";

export default function HeaderIcons() {
  const [state, setStates] = ToggleAtom.useState();
  useEffect(() => {
    // Listen for route changes and reset the states
    const subscription = routerEvents.onNavigating(() => {
      // Check if the navigation mode is 'navigation'
      // Reset the states when navigating to a new route
      setStates({
        headerSearch: false,
        langSwitch: false,
        userIcon: false,
        cartIcon: false,
      });
    });

    // Clean up the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [setStates]);

  return (
    <div className="hidden lg:flex gap-4">
      <LanguageSwitch />
      <HeaderSearch />
      <UserIcon />
      <div className="border border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary-hover">
        <Link to={URLS.wishlist}>
          <AiOutlineHeart />
        </Link>
      </div>
      <HeaderCart />
    </div>
  );
}
