import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";

export default function FooterCopyRights() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <p className="copy-rights">
        {trans("copyRights")} &copy; {currentYear}{" "}
        <Link to="https://demo2.pavothemes.com/poco/">pocofood</Link>.{" "}
        {trans("allRightsReserved")}.
      </p>
    </>
  );
}
