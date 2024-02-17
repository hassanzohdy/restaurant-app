import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { userAtom } from "apps/front-office/account/atoms/user-atom";
import { useLogout } from "apps/front-office/account/hooks";
import { useHeaderState } from "apps/front-office/design-system/hooks/headerStateHook";
import URLS from "apps/front-office/utils/urls";
import { IoMdLogOut } from "react-icons/io";

export default function UserDropDownLogout() {
  const opened = useHeaderState("userIcon");

  const logout = useLogout();

  return (
    <div
      className={`
    absolute top-[59px] border-primary-main overflow-hidden border-t 
    duration-200 shadow-list transition-all bg-white -right-[70px] focus:opacity-100 w-[190px] flex flex-col
    ${opened ? "opacity-100 visible" : "opacity-0 invisible"}
    `}>
      <UserAccount />
      <Link
        to={URLS.account.updateProfile}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all p-2 border-b">
        {trans("updateProfile")}
      </Link>
      <Link
        to={URLS.orders.list}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all p-2 border-b">
        {trans("myOrders")}
      </Link>
      <button
        onClick={logout}
        className="text-red-500 px-2 flex items-center gap-2 group transition-all my-2">
        {trans("logout")}
        <IoMdLogOut className="text-xl group-hover:ml-1 transition-all rtl:rotate-180 group-hover:mr-1" />
      </button>
    </div>
  );
}

const UserAccount = () => {
  const user = userAtom.useValue();
  return (
    <div className="border-b p-2 cursor-default">
      <p>{user.name}</p>
      <p className="text-sm text-gray-500">{user.email}</p>
    </div>
  );
};
