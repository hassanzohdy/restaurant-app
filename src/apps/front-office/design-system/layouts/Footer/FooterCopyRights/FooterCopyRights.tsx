import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";

export default function FooterCopyRights() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <p className="copy-rights text-[13px] sm:text-[14px] font-normal">
        {trans("copyRights")} &copy; {currentYear}{" "}
        <Link
          to="https://demo2.pavothemes.com/poco/"
          className="text-[#ffc222]">
          pocofood
        </Link>
        . {trans("allRightsReserved")}.
      </p>
    </>
  );
}
