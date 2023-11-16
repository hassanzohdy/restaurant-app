import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { toggleWishlist } from "apps/front-office/menu/services/wishlist-service";
import { useState } from "react";

export function useWishlist(meal: Meal) {
  const [inWishlist, setIsFavorite] = useState(meal.isFavorite || false);

  const toggleAddToFavorite = () => {
    setIsFavorite(oldState => !oldState);
    toggleWishlist(meal.id).catch(() => {
      // TODO: Handle error
    });
  };

  return {
    inWishlist,
    toggleWishlist: toggleAddToFavorite,
  };
}
