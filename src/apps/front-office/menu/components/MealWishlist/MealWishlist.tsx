import { cn } from "apps/front-office/design-system/utils/cn";
import { useWishlist } from "apps/front-office/menu/hooks/use-wishlist";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

export type MealWishlistProps = {
  meal: Meal;
};
export default function MealWishlist({ meal }: MealWishlistProps) {
  const { inWishlist, isLoading, toggleWishlist } = useWishlist(meal);

  return (
    <button
      disabled={isLoading}
      className={cn(
        "px-5 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary-light text-gray-500 btn bg-primary-light hover:bg-primary-main/30 transition-colors",
        inWishlist && "text-rose-600",
      )}
      onClick={toggleWishlist}>
      {isLoading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        <FaHeart />
      )}
    </button>
  );
}
