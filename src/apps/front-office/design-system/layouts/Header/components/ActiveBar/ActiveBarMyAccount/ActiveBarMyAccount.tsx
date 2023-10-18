import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { BiUser } from "react-icons/bi";

export default function ActiveBarMyAccount() {
  return (
    <Link to={URLS.auth.register} className="activeIcons">
      <BiUser />
      <p>{trans("myAccount")}</p>
    </Link>
  );
}
