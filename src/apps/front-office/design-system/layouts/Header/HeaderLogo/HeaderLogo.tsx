import { Link } from "@mongez/react-router";
import logo from "../../../../../../shared/assets/images/logo.svg";

export default function HeaderLogo() {
  return (
    <>
      <h1 className="site-logo">
        <Link to="">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </h1>
    </>
  );
}
