import HeaderContact from "apps/front-office/design-system/layouts/Header/HeaderBottom/HeaderContact";
import HeaderIcons from "apps/front-office/design-system/layouts/Header/HeaderBottom/HeaderIcons";
import HeaderLogo from "apps/front-office/design-system/layouts/Header/HeaderBottom/HeaderLogo";
import HeaderMenus from "apps/front-office/design-system/layouts/Header/HeaderBottom/HeaderMenus";

export default function HeaderBottom() {
  return (
    <>
      <HeaderLogo />
      <HeaderMenus />
      <HeaderContact />
      <HeaderIcons />
    </>
  );
}
