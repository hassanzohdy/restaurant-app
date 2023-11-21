import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { Button } from "apps/front-office/design-system/components/Button";
import { useWishlist } from "apps/front-office/menu/hooks/use-wishlist";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { IoClose } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";

export type WishlistTableItemProps = {
  meal: Meal;
  removeMeal: (mealId:number|string) => void
};

export default function WishlistTableItem({
  meal,removeMeal
}: WishlistTableItemProps) {
  const { toggleWishlist } = useWishlist(meal);
  const displayedPrice = price(meal?.price);
  const displayedSale = price(meal?.salePrice);

  function deleteMealHandler() {
    toggleWishlist();
    removeMeal(meal.id);
  }

  return (
    <tr className="border-b max-lg:block max-lg:pl-[100px] max-lg:relative">
      <td className="product-remove w-[3%] px-3 py-5 pl-0 max-lg:absolute max-lg:w-auto max-lg:right-1 max-lg:top-6 max-lg:p-0">
        <button onClick={deleteMealHandler} >
        <IoClose className="w-[15px] h-[15px] p-[2px] border rounded-full text-[#b3b3b3] border-[#b3b3b3] cursor-pointer hover:text-[#f00] hover:border-[#f00] duration-700 transition-all ease-in-out" />
        </button>
      </td>
      <td className="product-thumbnail w-[10%] py-3 px-6 h-[140px] max-lg:absolute max-lg:w-auto max-lg:left-1 max-lg:top-6 max-lg:p-0">
        <Link to={URLS.menu.viewMeal(meal)}>
          <img src={meal?.image?.url} alt={meal.name} />
        </Link>
      </td>
      <td className="product-name w-[27%] px-3 py-5 max-lg:block max-lg:w-full max-lg:pl-0 max-lg:px-2 max-lg:pr-5 max-lg:border-b">
        <Link to={URLS.menu.viewMeal(meal)}
          className="hover:text-primary-hover duration-700 transition-all ease-in-out">
          {meal.name}
        </Link>
      </td>
      <td className="product-price w-[17%] px-3 py-5 max-lg:flex max-lg:justify-between max-lg:items-center max-lg:w-full max-lg:px-0 max-lg:py-3 max-lg:border-b">
        <label className="hidden max-lg:block text-[15px]  text-[#1e1d23] font-normal max-sm:text-[12px]">
          {trans("price")}
        </label>
        <div>
          {displayedSale && (
            <span className="inline-block text-secondary mr-1">
              {displayedSale}
            </span>
          )}
          <span
            className={`inline-block  ${
              displayedSale ? "text-black line-through" : "text-primary-main"
            }`}>
            {displayedPrice}
          </span>
        </div>
      </td>
      <td className="product-quantity w-[20%] px-3 py-5 max-lg:flex max-lg:justify-between max-lg:items-center max-lg:w-full max-lg:px-0 max-lg:py-3 max-lg:border-b">
        <label className="hidden max-lg:block text-[15px]  text-[#1e1d23] font-normal max-sm:text-[12px]">
          {trans("quantity")}
        </label>
        <div className="stock-status">
          <span className="text-secondary">{trans("inStock")}</span>
        </div>
      </td>
      <td className="add-to-cart w-[28%] px-3 py-5 max-lg:flex max-lg:justify-between max-lg:items-center max-lg:w-full max-lg:px-0 max-lg:py-3">
        <span className="block mb-2 max-lg:mb-0">
          {trans("addedOn")} Oct 5, 2023
        </span>
        <Button
          variant="primary"
          className="px-3 py-2 max-sm:px-2 max-sm:py-1 max-sm:text-[0]">
          {trans("addToCart")}
          <span className="hidden max-sm:block">
            <TbShoppingBag size="20" />
          </span>
        </Button>
      </td>
    </tr>
  );
}
