import { Link, routerEvents } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useCallback, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ToggleGroupAtom } from "../../atoms/HeaderAtoms";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderCart from "./HeaderCart";
import UserIcon from "./HeaderUser/UserIcon";
import LanguageSwitch from "./LanguageSwitch";

export default function HeaderIcons() {
  // Memoize the resetStates function to prevent unnecessary re-renders
  const resetStates = useCallback(() => {
    ToggleGroupAtom.reset();
  }, []);

  // Memoize the handleClickOutside function
  const handleClickOutside = useCallback(
    event => {
      const popups = document.getElementsByClassName("popups");
      const clickedInsidePopup = Array.from(popups).some(popup =>
        popup.contains(event.target),
      );

      if (!clickedInsidePopup) {
        resetStates();
      }
    },
    [resetStates],
  );

  useEffect(() => {
    // Listen for route changes and reset the states
    const handleRouteChange = () => {
      resetStates();
    };
    const routeChangeSubscription =
      routerEvents.onNavigating(handleRouteChange);

    // Clean up the subscription when the component unmounts
    return () => {
      routeChangeSubscription.unsubscribe();
    };
  }, [resetStates]);

  useEffect(() => {
    // Add a click event listener to reset the states when clicking outside the header
    document.addEventListener("click", handleClickOutside);

    // Clean up the click event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="hidden lg:flex gap-4 popups">
      <LanguageSwitch />
      <HeaderSearch />
      <UserIcon />
      <div className="border border-border cursor-pointer rounded-full p-3 text-xl hover-bg-primary-hover">
        <Link to={URLS.wishlist}>
          <AiOutlineHeart />
        </Link>
      </div>
      <HeaderCart />
    </div>
  );
}
