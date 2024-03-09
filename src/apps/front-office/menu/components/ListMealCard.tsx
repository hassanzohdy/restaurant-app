import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import Stars from "apps/front-office/design-system/components/Stars";
import MealCardFavorite from "apps/front-office/menu/pages/MealDetailsPage/components/MealCard/MealCardFavorite";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { FaBasketShopping } from "react-icons/fa6";
import useCart from "shared/hooks/useCart";
import { Meal } from "../pages/MealDetailsPage/utils/types";

export type ListMealCardProps = {
  meal: Meal;
};

export default function ListMealCard({ meal }: ListMealCardProps) {
  const displayedPrice = price(meal?.price);
  const displayedSale = price(meal?.salePrice);

  const isOnSale = displayedPrice !== displayedSale;
  const { addMealToCart } = useCart();

  return (
    <div className="relative flex md:flex-row flex-col md:h-60 md:ml-10 p-4 mt-6 border-2 rounded-2xl">
      <MealCardFavorite meal={meal} />

      <div className="basis-1/4 h-full">
        <Link to={URLS.menu.viewMeal(meal)}>
          <img
            style={{ margin: "18px auto" }}
            src={meal.image.url}
            width={200}
            height={200}
            alt={meal.name}
          />
        </Link>
      </div>
      <div className="basis-3/4 pt-8 relative">
        <Link to={URLS.menu.viewMeal(meal)}>
          <h2 className="font-bold">{meal.name}</h2>{" "}
        </Link>
        <Stars ratings={meal.rating} />
        <p className="font-light mt-1 line-clamp-3">{meal.description}</p>
        <div className="flex gap-2">
          <span
            className={`inline-block self-end font-bold ${
              isOnSale
                ? "text-gray-700 line-through "
                : "text-primary-main text-xl"
            }`}>
            {displayedPrice}
          </span>
          {isOnSale && (
            <span className="inline-block self-start text-primary-main font-bold text-xl">
              {displayedSale}
            </span>
          )}
        </div>
        <button
          onClick={() => addMealToCart(meal.id, 1)}
          title={trans("addToCart")}
          aria-aria-label={trans("addToCart")}
          className="w-10 h-10 flex items-center justify-center rounded-2xl bg-amber-400 absolute md:bottom-2 md:right-4 top-[-230px] left-1 md:left-[unset] md:top-[unset]">
          <FaBasketShopping className="text-lg" />
        </button>
      </div>
    </div>
  );
}
