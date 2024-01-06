import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { settingsAtom } from "apps/general/atoms/settings-atom";
import { MdOutlineDeliveryDining } from "react-icons/md";

export default function HeaderContact() {
  const contact = settingsAtom.use("contact") || {};
  return (
    <Link
      tel={contact.phoneNumber}
      className="hidden xl:flex flex-row items-center n">
      <MdOutlineDeliveryDining className="text-[48px] text-[#079447]" />
      <div>
        <span className="text-light text-[13px] font-medium">
          {trans("callAndOrderIn")}
        </span>
        <p className="text-primary-main text-[20px] font-bold leading-[1em] rtl:text-[20px]">
          {contact.phoneNumber}
        </p>
      </div>
    </Link>
  );
}
