import { cn } from "apps/front-office/design-system/utils/cn";
import { useWishlist } from "apps/front-office/menu/hooks/use-wishlist";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { AiFillHeart } from "react-icons/ai";

export type MealArdFavoriteProps = {
  meal: MealType;
};

export default function MealCardFavorite({ meal }: MealArdFavoriteProps) {
  const { inWishlist, toggleWishlist } = useWishlist(meal);

  return (
    <>
      <button
        onClick={toggleWishlist}
        title="Add to favorite"
        className="absolute top-6 right-6 z-20">
        <AiFillHeart
          className={cn(
            "hover:text-red-500 transition-colors duration-300",
            inWishlist ? "text-red-500" : "text-light/50",
          )}
          size={30}
        />
      </button>
    </>
  );
}
