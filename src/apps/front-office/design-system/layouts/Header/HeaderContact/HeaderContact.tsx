import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { IconMoped } from "@tabler/icons-react";

export default function HeaderContact() {
  return (
    <>
      <div className="call-number hidden md:flex">
        <span className="icon">
          <IconMoped stroke="1" />
        </span>
        <div>
          <span>{trans("call")}</span>
          <Link tel="+1718-904-4450">+1718-904-4450</Link>
        </div>
      </div>
    </>
  );
}
