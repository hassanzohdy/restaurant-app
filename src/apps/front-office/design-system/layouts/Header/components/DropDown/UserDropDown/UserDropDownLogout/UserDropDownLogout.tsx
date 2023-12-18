import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
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
    absolute top-[59px] border-primary-main overflow-hidden p-1 border-t 
    duration-200 shadow-list transition-all bg-white rtl:left-[-70px] ltr:-right-[60px] focus:opacity-100 w-[170px] rtl:w-[190px] flex flex-col
    ${opened ? "opacity-100 visible" : "opacity-0 invisible"}
    `}>
      <Link
        to={URLS.account.updateProfile}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all py-2 border-b">
        {trans("updateProfile")}
      </Link>
      <Link
        to={URLS.orders.list}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all py-2 border-b">
        {trans("myOrders")}
      </Link>
      <Link
        to={URLS.account.addressBook}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all py-2 border-b">
        {trans("myAddress")}
      </Link>
      <Link
        to={URLS.account.changePassword}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all py-2 border-b">
        {trans("changePassword")}
      </Link>
      <button
        onClick={logout}
        className="text-red-500 hover:text-red-700 flex items-center gap-2 group transition-all my-2">
        {trans("logout")}
        <IoMdLogOut className="text-xl group-hover:ml-1 transition-all rtl:rotate-180 group-hover:mr-1" />
      </button>
    </div>
  );
}
