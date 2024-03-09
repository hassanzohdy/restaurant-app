import UserDropDownLogout from "../DropDown/UserDropDown/UserDropDownLogout";
import ActiveBarCart from "./ActiveBarCart/ActiveBarCart";
import ActiveBarLang from "./ActiveBarLang";
import ActiveBarMyAccount from "./ActiveBarMyAccount";
import ActiveBarSearch from "./ActiveBarSearch";
import ActiveBarSearchForm from "./ActiveBarSearch/ActiveBarSearchForm";
import ActiveBarWishList from "./ActiveBarWishList";
import "./activeBar.scss";

export default function ActiveBar() {
  return (
    <div className="sticky bottom-0 lg:hidden h-[50px] z-50 w-full bg-backgroundHover popups">
      <div className="flex flex-row h-full justify-between">
        <ActiveBarLang />
        <ActiveBarMyAccount />
        <ActiveBarSearch />
        <ActiveBarSearchForm />
        <ActiveBarWishList />
        <ActiveBarCart />
        <UserDropDownLogout />
      </div>
    </div>
  );
}
