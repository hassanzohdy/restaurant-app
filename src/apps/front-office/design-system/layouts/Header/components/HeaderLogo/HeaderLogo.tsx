import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import Logo from "/src/shared/assets/images/logo_svg.svg";

export default function HeaderLogo() {
  return (
    <Link to={URLS.home}>
      <img src={Logo} alt="poco" className="w-32" />
    </Link>
  );
}
