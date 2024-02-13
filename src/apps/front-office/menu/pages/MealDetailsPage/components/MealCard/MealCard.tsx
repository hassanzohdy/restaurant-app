import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import Stars from "apps/front-office/design-system/components/Stars";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import useCart from "shared/hooks/useCart";
import { Meal } from "../../utils/types";
import MealCardFavorite from "./MealCardFavorite";

export type MealCardProps = {
  meal: Meal;
};

export default function MealCard({ meal }: MealCardProps) {
  const displayedPrice = price(meal?.price);
  const displayedSale = price(meal?.salePrice);

  const isOnSale = displayedPrice !== displayedSale;

  const { addMealToCart, isLoading } = useCart();

  return (
    <div className="p-3 group rounded-[2rem] border relative">
      <MealCardFavorite meal={meal} />
      {/* Sale */}
      {isOnSale && (
        <div className="absolute z-20 top-6 left-6 font-bold bg-gray-800 text-white rounded-xl px-2 text-[13px]">
          Sale !
        </div>
      )}
      <Link
        to={URLS.menu.viewMeal(meal)}
        className="h-64 relative overflow-hidden flex items-center justify-center cursor-pointer rounded-3xl">
        <img
          src={meal.image.url + "?w=200&h=200"}
          alt={meal.name}
          width={200}
          height={200}
          className="group-hover:scale-125 z-10 rounded-full transition-transform duration-300"
        />
        <span className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-main rounded-3xl group-hover:bg-opacity-100 group-hover:h-full transition-all duration-300 bg-opacity-10"></span>
      </Link>
      <div className="mt-6 space-y-2 m-3">
        {/* Starts */}
        <Stars ratings={meal.ratings} />
        <Link
          to={URLS.menu.viewMeal(meal)}
          className="font-bold text-lg inline-block">
          {meal.name}
        </Link>
        <p title={meal.name} className="line-clamp-2 font-light">
          {meal.description}
        </p>
        <div className="flex items-center justify-between gap-4">
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
          {isLoading ? (
            <div className="w-[34px] h-[34px]">
              <AiOutlineLoading3Quarters className="text-primary-main animate-spin w-full h-full" />
            </div>
          ) : (
            <button
              onClick={() => addMealToCart(meal.id, 1)}
              title={trans("addToCart")}
              disabled={isLoading}
              className="bg-primary-main p-2 rounded-2xl hover:bg-primary-hover transition-colors">
              <TbShoppingBag color="#000"></TbShoppingBag>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
