import { Link } from "@mongez/react-router";
import { userAtom } from "apps/front-office/account/atoms/user-atom";
import URLS from "apps/front-office/utils/urls";
import { AiOutlineHeart } from "react-icons/ai";

export default function Wishlist() {
  const wishListLength = userAtom.useValue().wishlist || 0;

  return (
    <Link
      title="wishlist"
      className="relative border border-border cursor-pointer rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover"
      to={URLS.wishlist}>
      <AiOutlineHeart />
      {wishListLength > 0 && (
        <div className="absolute right-[7px] top-[8px] text-[10px] font-bold bg-primary-main rounded-full w-4 h-4 flex items-center justify-center">
          {wishListLength}
        </div>
      )}
    </Link>
  );
}
