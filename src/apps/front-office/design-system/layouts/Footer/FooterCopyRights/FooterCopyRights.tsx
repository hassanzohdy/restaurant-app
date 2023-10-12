import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";

export default function FooterCopyRights() {
  return (
    <>
      <p className="copy-rights">
        {trans("copyRights")} &copy; 2023{" "}
        <Link to="https://demo2.pavothemes.com/poco/">pocofood</Link>.{" "}
        {trans("allRightsReserved")}.
      </p>
    </>
  );
}
