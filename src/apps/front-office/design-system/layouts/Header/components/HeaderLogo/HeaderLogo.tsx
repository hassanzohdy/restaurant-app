import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { settingsAtom } from "apps/general/atoms/settings-atom";

export default function HeaderLogo() {
  const { logo, appName } = settingsAtom.use("general") || {}

  if (!logo) return null;

  return (
    <Link to={URLS.home}>
      <img src={logo.url} alt={appName} title={appName} className="w-32" />
    </Link>
  );
}
