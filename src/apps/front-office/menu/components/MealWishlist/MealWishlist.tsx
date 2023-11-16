import { cn } from "apps/front-office/design-system/utils/cn";
import { useWishlist } from "apps/front-office/menu/hooks/use-wishlist";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { AiTwotoneHeart } from "react-icons/ai";

export type MealWishlistProps = {
  // props go here
  meal: Meal;
};
export default function MealWishlist({ meal }: MealWishlistProps) {
  const { inWishlist, toggleWishlist } = useWishlist(meal);

  return (
    <>
      <button
        className={cn(
          " px-5 rounded-xl text-gray-500 btn bg-primary-light",
          inWishlist ? "text-rose-600" : "hover:text-primary-main",
        )}
        onClick={toggleWishlist}>
        <AiTwotoneHeart />
      </button>
    </>
  );
}
