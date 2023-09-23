import { userIconAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { BiUser } from "react-icons/bi";
import UserDropDown from "../../DropDown/UserDropDown";

export default function UserIcon() {
  return (
    <div className="relative">
      <div
        onClick={userIconAtom.toggle}
        className="border  border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary_hover">
        <BiUser />
      </div>
      <UserDropDown />
    </div>
  );
}
