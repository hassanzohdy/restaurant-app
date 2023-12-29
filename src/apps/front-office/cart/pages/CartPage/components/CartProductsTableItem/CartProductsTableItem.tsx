import { Link } from "@mongez/react-router";
import { CartItem } from "apps/front-office/cart/utils/types";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { AiOutlineClose } from "react-icons/ai";
import useCart from "shared/hooks/useCart";

export type CartProductsTableItemProps = {
  cartItem: CartItem;
};
export default function CartTableItem({
  cartItem,
}: CartProductsTableItemProps) {
  const { removeItemFromCart, updateCartItem, isLoading } = useCart();

  const handleUpdateCartItem = (quantity: number) => {
    const newAmount = quantity > 0 ? quantity : 1;

    updateCartItem(cartItem.id, newAmount);
  };

  return (
    <tr className="border-b max-sm:block max-sm:pl-[100px] max-sm:relative">
      <td className="product-remove w-[5%] px-3 py-5 pl-0 max-sm:absolute max-sm:w-auto max-sm:right-1 max-sm:top-6 max-sm:p-0">
        <button
          onClick={() => removeItemFromCart(cartItem.id)}
          className="rounded-full p-1 hover:bg-gray-100 transition-colors w-6 text-bodyTextColor h-6 flex items-center justify-center border">
          <AiOutlineClose size={15} className="w-full h-full" />
        </button>
      </td>
      <td className="product-name w-[30%] px-3 py-5 max-sm:block max-sm:w-full max-sm:pl-0 max-sm:px-2 max-sm:pr-5 max-sm:border-b">
        <Link
          to={URLS.menu.viewMeal(cartItem.meal)}
          className="flex items-center gap-2 hover:text-primary-hover duration-700 transition-all ease-in-out">
          <img
            className="max-w-[90px]"
            src={cartItem.meal.image.url}
            alt={cartItem.meal.name}
          />
          {cartItem.meal.name}
        </Link>
      </td>
      <td className="product-price w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
        <span className="text-primary-main">{price(cartItem.price)}</span>
      </td>
      <td className="product-quantity w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
        <div className="quantity flex items-center gap-2">
          <button
            disabled={isLoading}
            className="w-8 h-8 disabled:opacity-60 disabled:cursor-not-allowed bg-primary-light hover:bg-primary-light hover:text-primary-main p-1 rounded-full"
            onClick={() => handleUpdateCartItem(cartItem.quantity - 1)}>
            -
          </button>
          <span className="px-4 py-2">{cartItem.quantity}</span>
          <button
            disabled={isLoading}
            className="w-8 h-8 disabled:opacity-60 disabled:cursor-not-allowed bg-primary-light hover:bg-primary-light hover:text-primary-main p-1 rounded-full"
            onClick={() => handleUpdateCartItem(cartItem.quantity + 1)}>
            +
          </button>
        </div>
      </td>
      <td className="product-subtotal w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3">
        <span className="text-primary-main">{price(cartItem.totalPrice)}</span>
      </td>
    </tr>
  );
}
