import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import user from "apps/front-office/account/user";
import URLS from "apps/front-office/utils/urls";
import { BiUser } from "react-icons/bi";
import { userAccountAtom } from "../activeBar-atom/activeBar-atom";

export default function ActiveBarMyAccount() {
  if (user.isLoggedIn() && !user.isGuest()) {
    return <UserDropDownLogin />;
  }

  return (
    <Link to={URLS.auth.login} className="activeIcons">
      <BiUser />
      <p>{trans("myAccount")}</p>
    </Link>
  );
}

const UserDropDownLogin = () => {
  return (
    <div className="activeIcons" onClick={() => userAccountAtom.toggle()}>
      <BiUser />
      <p>{trans("myAccount")}</p>
    </div>
  );
};
