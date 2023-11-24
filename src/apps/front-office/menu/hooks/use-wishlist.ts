import { trans } from "@mongez/localization";
import { wishListAtom } from "apps/front-office/design-system/layouts/Header/atoms/header-atoms";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { toggleWishlist } from "apps/front-office/menu/services/wishlist-service";
import { useState } from "react";
import { toast } from "react-toastify";

export function useWishlist(meal: Meal) {
  const [inWishlist, setIsFavorite] = useState(meal.isFavorite || false);

  const toggleAddToFavorite = () => {
    setIsFavorite(oldState => !oldState);
    toggleWishlist(meal.id)
      // need this every time the a meal added to the favorite list to trigger the array length
      .then(response => {
        if (response.data.wishlist.meals) {
          wishListAtom.update(response.data.wishlist.meals.length);
        } else {
          wishListAtom.reset();
        }
      })
      .catch(() => {
        toast.error(trans("addToWishlistError"));
      });
  };

  return {
    inWishlist,
    toggleWishlist: toggleAddToFavorite,
  };
}
