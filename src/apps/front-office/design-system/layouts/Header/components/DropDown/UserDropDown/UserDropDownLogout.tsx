import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { useLogout } from "apps/front-office/account/hooks";
import URLS from "apps/front-office/utils/urls";
import { IoMdLogOut } from "react-icons/io";
import { useToggleState } from "../../../Hooks/headerStateHook";

export default function UserDropDownLogout() {
  const { groupState } = useToggleState();

  const logout = useLogout();

  return (
    <div
      className={`
    absolute top-[59px] border-primary-main overflow-hidden p-1 border-t 
    duration-200 shadow-list transition-all bg-white rtl:left-[-70px] ltr:-right-[52px] focus:opacity-100 w-[150px] rtl:w-[190px] flex flex-col py-2 gap-2
    ${groupState.userIcon ? "opacity-100 visible" : "opacity-0 invisible"}
    `}>
      <Link
        to={URLS.account.updateProfile}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all">
        {trans("updateProfile")}
      </Link>
      <Link
        to={URLS.orders.list}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all">
        {trans("myOrders")}
      </Link>
      <Link
        to={URLS.account.addressBook}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all">
        {trans("myAddress")}
      </Link>
      <Link
        to={URLS.account.changePassword}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all">
        {trans("changePassword")}
      </Link>
      <button
        onClick={() => logout()}
        className="text-red-500 hover:text-red-700 flex items-center gap-2 group transition-all">
        {trans("logout")}
        <IoMdLogOut className="text-xl group-hover:ml-1 transition-all rotate-180 group-hover:mr-1" />
      </button>
    </div>
  );
}
