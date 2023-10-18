import ActiveBarCart from "./ActiveBarCart/ActiveBarCart";
import ActiveBarLang from "./ActiveBarLang";
import LanguageActiveList from "./ActiveBarLang/LanguageActiveList";
import ActiveBarMyAccount from "./ActiveBarMyAccount";
import ActiveBarSearch from "./ActiveBarSearch";
import ActiveBarSearchForm from "./ActiveBarSearch/ActiveBarSearchForm";
import ActiveBarWishList from "./ActiveBarWishList";
import "./activeBar.scss";

export default function ActiveBar() {
  return (
    <div className="bottom-0 lg:hidden left-0 h-[50px] z-40 fixed w-full bg-background">
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
