import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
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
  const { addMealToCart } = useCart();

  return (
    <div className="relative flex flex-row h-60 ml-10 mt-6 border-2 rounded-2xl">
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
          <h2 className="font-bold">{meal.name}</h2>
        </Link>
        <p className="font-light mt-1">{meal.description}</p>
        <div className="flex mt-2 gap-2">
          {meal.salePrice !== 0 && (
            <span className="inline-block text-secondary">
              {price(meal.salePrice)}
            </span>
          )}
          <span
            className={`inline-block font-bold ${
              meal.salePrice ? "text-black line-through" : "text-primary-main"
            }`}>
            {price(meal.price)}
          </span>
        </div>
        <button
          onClick={() => addMealToCart(meal.id, 1)}
          title={trans("addToCart")}
          aria-aria-label={trans("addToCart")}
          className="w-10 h-10 flex items-center justify-center rounded-2xl bg-amber-400 absolute bottom-2 right-4">
          <FaBasketShopping className="text-lg" />
        </button>
      </div>
    </div>
  );
}
