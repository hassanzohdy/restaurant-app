import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { TiShoppingCart } from "react-icons/ti";

export default function ActiveBarCart() {
  return (
    <Link to={URLS.cart} className="activeIcons">
      <TiShoppingCart />
      <p className="text-center">{trans("cart")}</p>
    </Link>
  );
}
