import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";

const accountRoutes = [
  {
    path: URLS.account.updateProfile,
    name: trans("general"),
  },
  {
    path: URLS.account.changePassword,
    name: trans("changePassword"),
  },
  {
    path: URLS.account.addressBook,
    name: trans("bookAddresses"),
  },
];

export default function UpdateProfileAside() {
  const basePath = current("route");

  return (
    <aside className="z-20 ml-[2px]">
      <ul className="flex md:flex-col md:w-[190px] justify-center">
        {accountRoutes.map((route, idx) => {
          const isActive = route.path === basePath;
          return (
            <Link
              to={route.path}
              key={idx}
              className={`font-bold rounded-md text-gray-800 text-center ${
                isActive
                  ? "border-4 md:ltr:border-r-white md:rtl:border-l-white md:border-b-border border-b-white p-2"
                  : "p-2 border-4 border-transparent "
              }`}>
              {route.name}
            </Link>
          );
        })}
      </ul>
    </aside>
  );
}
