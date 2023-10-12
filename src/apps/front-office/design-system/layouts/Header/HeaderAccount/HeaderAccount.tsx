import { IconUser } from "@tabler/icons-react";
import { headerAccountAtom } from "apps/front-office/design-system/atoms/header-account-atom";
import HeaderAccountDropdown from "./HeaderAccountDropdown";

export default function HeaderAccount() {
  let opened: boolean = false;

  const toggle = () => {
    if (opened) {
      headerAccountAtom.change("opened", false);
      opened = false;
    } else {
      headerAccountAtom.change("opened", true);
      opened = true;
    }
  };
  return (
    <>
      <div className="header-account relative">
        <span
          onClick={toggle}
          className="icon flex items-center justify-center">
          <IconUser />
        </span>
        <HeaderAccountDropdown />
      </div>
    </>
  );
}
