import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { CartItem } from "apps/front-office/cart/utils/types";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useCart2 } from "shared/hooks/use-cart-2";

export type CartProductsTableItemProps = {
  cartItem: CartItem;
};
export default function CartTableItem({
  cartItem,
}: CartProductsTableItemProps) {
  const { removeItemFromCart, updateCartItem } = useCart2();
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleUpdateCartItem = (newQuantity: number) => {
    const newAmount = newQuantity > 0 ? newQuantity : 1;

    setQuantity(newAmount);
    updateCartItem(cartItem.id, newAmount);
  };

  return (
    <tr className="border-b max-sm:block md:pl-[100px] max-sm:relative">
      <td className="product-remove w-[5%] px-3 py-5 pl-0 max-sm:absolute max-sm:w-auto max-sm:right-1 max-sm:top-6 max-sm:p-0">
        <button
          onClick={() => removeItemFromCart(cartItem.id)}
          className="rounded-full p-1 transition-colors w-6 text-bodyTextColor h-6 flex items-center justify-center border hover:text-red-400"
          title={trans("removeFromCart")}>
          <AiOutlineClose size={15} className="w-full h-full" />
        </button>
      </td>
      <td className="product-name w-[30%] px-3 py-5 max-sm:block max-sm:w-full max-sm:pl-0 max-sm:px-2 max-sm:pr-5 max-sm:border-b">
        <Link
          to={URLS.menu.viewMeal(cartItem.meal)}
          className="flex items-center gap-2 hover:text-primary-hover duration-700 transition-all ease-in-out truncate">
          <img
            className="max-w-[90px]"
            src={cartItem.meal.image.url}
            alt={cartItem.meal.name}
          />
          {cartItem.meal.name}
        </Link>
      </td>
      <td className="w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b text-center">
        <span className="text-primary-main">{price(cartItem.price)}</span>
      </td>
      <td className="product-quantity px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b flex justify-center my-[25px] w-full">
        <div className="quantity flex items-center gap-2">
          <button
            className="w-8 h-8 disabled:opacity-60 disabled:cursor-not-allowed bg-primary-light hover:bg-primary-light hover:text-primary-main p-1 rounded-full"
            onClick={() => handleUpdateCartItem(quantity - 1)}
            disabled={quantity === 1}
            title={trans("removeFromCart")}>
            -
          </button>
          <span className="px-4 py-2">{quantity}</span>
          <button
            className="w-8 h-8 disabled:opacity-60 disabled:cursor-not-allowed bg-primary-light hover:bg-primary-light hover:text-primary-main p-1 rounded-full"
            onClick={() => handleUpdateCartItem(quantity + 1)}
            title={trans("addToCart")}>
            +
          </button>
        </div>
      </td>
      <td className="product-subtotal w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 text-center">
        <span className="text-primary-main">
          {price(cartItem.total.subtotal)}
        </span>
      </td>
    </tr>
  );
}
