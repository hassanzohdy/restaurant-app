import { BiUser } from "react-icons/bi";
import { useToggleState } from "../../../Hooks/headerStateHook";
import UserDropDown from "../../DropDown/UserDropDown";

export default function UserIcon() {
  const { toggleState } = useToggleState();
  return (
    <div className="relative">
      <button
        onClick={() => toggleState("userIcon")}
        className="border  border-border cursor-pointer rounded-full  w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover ">
        <BiUser />
      </button>
      <UserDropDown />
    </div>
  );
}
