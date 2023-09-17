import { Link } from "@mongez/react-router";
import { RiArrowDropRightLine } from "react-icons/ri";

export const BreadCrumbs = () => {
  const pathname = location.pathname;
  const crumbs = pathname.split("/").filter(crumb => crumb !== "");
  let currentLink = "";

  return (
    <div className="flex gap-2 relative">
      {crumbs.map((crumb, idx) => {
        currentLink += `/${crumb}`;

        return (
          <div key={idx} className="capitalize">
            {idx !== crumbs.length - 1 ? (
              <Link to={currentLink} className="hover:text-black">
                {crumb} <RiArrowDropRightLine className="inline-block" />
              </Link>
            ) : (
              <Link to={currentLink} className="hover:text-black">
                {crumb}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};
