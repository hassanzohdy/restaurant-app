import { Link } from "@mongez/react-router";
import { settingsAtom } from "apps/general/atoms/settings-atom";
import { PiPhonePlusFill } from "react-icons/pi";
export default function HeaderPhone() {
  const contact = settingsAtom.use("contact") || {};
  return (
    <Link
      className="lg:hidden cursor-pointer text-[35px] hover:bg-primary_hover"
      tel={contact.phoneNumber}>
      <PiPhonePlusFill />
    </Link>
  );
}
