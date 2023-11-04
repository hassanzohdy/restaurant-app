import useResetStatesOnAction from "../../Hooks/useResetStatesOnAction";
import { toggleGroupActiveBarAtom } from "../../atoms/header-atoms";
import ActiveBarCart from "./ActiveBarCart/ActiveBarCart";
import ActiveBarLang from "./ActiveBarLang";
import LanguageActiveList from "./ActiveBarLang/LanguageActiveList";
import ActiveBarMyAccount from "./ActiveBarMyAccount";
import ActiveBarSearch from "./ActiveBarSearch";
import ActiveBarSearchForm from "./ActiveBarSearch/ActiveBarSearchForm";
import ActiveBarWishList from "./ActiveBarWishList";
import "./activeBar.scss";

export default function ActiveBar() {
  const { handleClickOutsideRef } = useResetStatesOnAction(
    toggleGroupActiveBarAtom,
  );

  return (
    <div
      className="sticky bottom-0  lg:hidden h-[50px] z-10 w-full bg-backgroundHover popups"
      ref={handleClickOutsideRef}>
      <div className="flex flex-row h-full justify-between">
        <ActiveBarLang />
        <LanguageActiveList />
        <ActiveBarMyAccount />
        <ActiveBarSearch />
        <ActiveBarSearchForm />
        <ActiveBarWishList />
        <ActiveBarCart />
      </div>
    </div>
  );
}
