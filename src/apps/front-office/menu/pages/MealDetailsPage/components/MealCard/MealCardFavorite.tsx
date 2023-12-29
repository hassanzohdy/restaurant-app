import { cn } from "apps/front-office/design-system/utils/cn";
import { useWishlist } from "apps/front-office/menu/hooks/use-wishlist";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { AiFillHeart, AiOutlineLoading3Quarters } from "react-icons/ai";

export type MealArdFavoriteProps = {
  meal: Meal;
};

export default function MealCardFavorite({ meal }: MealArdFavoriteProps) {
  const { inWishlist, isLoading, toggleWishlist } = useWishlist(meal);

  return (
    <>
      <button
        disabled={isLoading}
        onClick={toggleWishlist}
        title="Add to favorite"
        className="absolute disabled:cursor-not-allowed top-6 right-6 z-20">
        {isLoading ? (
          <AiOutlineLoading3Quarters
            size={25}
            className="text-red-500 animate-spin"
          />
        ) : (
          <AiFillHeart
            className={cn(
              "hover:text-red-500 transition-colors duration-300",
              inWishlist ? "text-red-500" : "text-light/50",
            )}
            size={30}
          />
        )}
      </button>
    </>
  );
}
