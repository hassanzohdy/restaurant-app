import { useOnce } from "@mongez/react-hooks";
import { getWishlistsList } from "apps/front-office/menu/services/wishlist-service";
import { wishListAtom } from "../atoms/header-atoms";

export default function useWishListUpdate() {
  useOnce(() => {
    getWishlistsList().then(response => {
      const wishlistMeals = response.data.wishlist.meals;
      const wishlistLength = wishlistMeals ? wishlistMeals.length : 0;

      wishListAtom.update(wishlistLength);
    });
  });
}
