import { trans } from "@mongez/localization";
import {
  showToastMessage,
  toastError,
} from "apps/front-office/account/hooks/useToastMessage";
import { wishListAtom } from "apps/front-office/design-system/atoms/header-atoms";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { toggleWishlist } from "apps/front-office/menu/services/wishlist-service";
import { useState } from "react";

export function useWishlist(meal: Meal) {
  const [inWishlist, setIsFavorite] = useState(meal.isFavorite || false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleAddToFavorite = () => {
    setIsFavorite(oldState => !oldState);
    setIsLoading(true);

    toggleWishlist(meal.id)
      // need this every time the a meal added to the favorite list to trigger the array length
      .then(response => {
        if (response.data.wishlist.meals) {
          wishListAtom.update(response.data.wishlist.meals.length);
          showToastMessage({
            message: trans("addedToWishlist"),
          });
        } else {
          wishListAtom.reset();
          showToastMessage({
            message: trans("removedFromWishlist"),
          });
        }
      })
      .catch(() => {
        toastError(trans("addToWishlistError"));
      })
      .finally(() => setIsLoading(false));
  };

  return {
    inWishlist,
    isLoading,
    toggleWishlist: toggleAddToFavorite,
  };
}
