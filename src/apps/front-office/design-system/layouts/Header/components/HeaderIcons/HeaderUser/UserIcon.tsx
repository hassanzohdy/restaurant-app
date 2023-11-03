import { BiUser } from "react-icons/bi";
import useToggleState from "../../../Hooks/HeaderStateHook";
import UserDropDown from "../../DropDown/UserDropDown";

// TODO: use button instead of div
export default function UserIcon() {
  const { toggleState } = useToggleState();
  return (
    <div className="relative">
      <button
        onClick={() => toggleState("userIcon")}
        className="border  border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary-hover">
        <BiUser />
      </button>
      <UserDropDown />
    </div>
  );
}
