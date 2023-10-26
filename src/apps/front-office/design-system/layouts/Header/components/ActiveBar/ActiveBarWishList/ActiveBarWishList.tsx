import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { AiOutlineHeart } from "react-icons/ai";

export default function ActiveBarWishList() {
  return (
    <Link to={URLS.wishlist} className="activeIcons">
      <AiOutlineHeart />
      <p>{trans("wishList")}</p>
    </Link>
  );
}
