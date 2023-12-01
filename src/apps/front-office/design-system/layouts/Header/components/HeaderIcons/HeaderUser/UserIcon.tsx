import { useHeaderStateToggle } from "apps/front-office/design-system/layouts/Header/Hooks/headerStateHook";
import { BiUser } from "react-icons/bi";
import UserDropDown from "../../DropDown/UserDropDown";

export default function UserIcon() {
  const openUserDropdown = useHeaderStateToggle("userIcon");

  return (
    <div className="relative">
      <button
        onClick={openUserDropdown}
        className="border  border-border cursor-pointer rounded-full  w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover ">
        <BiUser />
      </button>
      <UserDropDown />
    </div>
  );
}
