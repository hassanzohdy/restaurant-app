import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
<<<<<<< HEAD
import { IconMoped } from "@tabler/icons-react";
=======
import { IconMoped } from '@tabler/icons-react';
>>>>>>> 771d18da8db3945a77e32c400e14e2e57b22ffd5

export default function HeaderContact() {
  return (
    <>
<<<<<<< HEAD
      <div className="call-number hidden md:flex">
        <span className="icon">
          <IconMoped stroke="1" />
        </span>
        <div>
          <span>{trans("call")}</span>
=======
      <div className="call-number flex">
        <span className="icon"><IconMoped stroke="1"/></span>
        <div>
          <span>{trans('call')}</span>
>>>>>>> 771d18da8db3945a77e32c400e14e2e57b22ffd5
          <Link tel="+1718-904-4450">+1718-904-4450</Link>
        </div>
      </div>
    </>
  );
}
