import { useOnce } from "@mongez/react-hooks";
import { Link } from "@mongez/react-router";
import { getWishlistsList } from "apps/front-office/menu/services/wishlist-service";
import URLS from "apps/front-office/utils/urls";
import { AiOutlineHeart } from "react-icons/ai";
import { wishListAtom } from "../../../atoms/header-atoms";

export default function Wishlist() {
  // need this for the first time that the web site will load to trigger the wishlist array length
  useOnce(() => {
    getWishlistsList().then(response => {
      wishListAtom.update(response.data.wishlist.meals?.length || 0);
    });
  });

  return (
    <Link
      title="wishlist"
      className="relative border border-border cursor-pointer rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover"
      to={URLS.wishlist}>
      <AiOutlineHeart />
      <div className="absolute right-[7px] top-[8px] text-[10px] font-bold bg-primary-main rounded-full w-4 h-4 flex items-center justify-center">
        {wishListAtom.useValue()}
      </div>
    </Link>
  );
}
