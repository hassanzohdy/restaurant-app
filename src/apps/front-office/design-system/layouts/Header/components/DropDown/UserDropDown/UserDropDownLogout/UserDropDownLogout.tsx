import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { userAtom } from "apps/front-office/account/atoms/user-atom";
import { useLogout } from "apps/front-office/account/hooks";
import { useHeaderState } from "apps/front-office/design-system/hooks/headerStateHook";
import useResetStatesOnAction from "apps/front-office/design-system/hooks/useResetStatesOnAction";
import URLS from "apps/front-office/utils/urls";
import { IoMdLogOut } from "react-icons/io";
import { userAccountAtom } from "../../../ActiveBar/activeBar-atom/activeBar-atom";

export default function UserDropDownLogout() {
  const opened = useHeaderState("userIcon");
  const mobilePopup = userAccountAtom.use("opened");
  useResetStatesOnAction(userAccountAtom);

  const logout = useLogout();

  return (
    <div
      className={`
      fixed md:absolute md:h-fit md:left-[-75px] md:top-[55px] left-0 w-full overflow-hidden border-t border-primary-main
      shadow-list transition-all bg-white
      ${opened ? "md:opacity-100 md:visible" : "md:opacity-0 md:invisible"}
      ${mobilePopup ? `bottom-[50px]` : `bottom-[-150px] left-0`}
      flex-col md:flex md:flex-col md:w-[190px]
    `}>
      <UserAccount />
      <Link
        to={URLS.account.updateProfile}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all p-2 border-b block w-full">
        {trans("updateProfile")}
      </Link>
      <Link
        to={URLS.orders.list}
        className="hover:text-primary-hover hover:ml-1 rtl:hover:mr-1 transition-all p-2 border-b block w-full">
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
