import HeaderSearch from "apps/front-office/design-system/layouts/Header/HeaderSearch";
import HeaderAccount from "../HeaderAccount";
import HeaderCart from "../HeaderCart";

export default function HeaderIcons() {
  return (
    <>
      <div className="header-icons flex items-center">
        <HeaderSearch />
        <HeaderAccount />
        <HeaderCart />
      </div>
    </>
  );
}
