import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { updateCart } from "apps/front-office/cart/services/cart-service";
import { CartItem } from "apps/front-office/cart/utils/types";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import useCart from "shared/hooks/useCart";

export type CartMealsTableItemProps = {
  item: CartItem;
};
export default function CartMealsTableItem({ item }: CartMealsTableItemProps) {
  const { maxAmountPerOrder, removeItemFromCart } = useCart();
  const [amount, setAmount] = useState(item.quantity);

  const handleQuantityChange = newQuantity => {
    if (maxAmountPerOrder && newQuantity > maxAmountPerOrder) {
      return;
    }

    if (newQuantity < 1) {
      setAmount(1);
    } else {
      setAmount(newQuantity);
      console.log(item);
    }
    updateCart(item.id, newQuantity);
  };

  return (
    <tr className="border-b max-sm:block max-sm:pl-[100px] max-sm:relative">
      <td className="product-remove w-[5%] px-3 py-5 pl-0 max-sm:absolute max-sm:w-auto max-sm:right-1 max-sm:top-6 max-sm:p-0">
        <button
          onClick={() => removeItemFromCart(item.id)}
          className="self-center border-gray-400 rounded-full border w-4 h-4 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500"
          title={trans("removeFromCart")}>
          <IoClose />
        </button>
      </td>
      <td className="product-thumbnail w-[17%] py-3 px-6 h-[140px] max-sm:absolute max-sm:w-auto max-sm:left-1 max-sm:top-6 max-sm:p-0">
        <Link to={URLS.menu.viewMeal(item.meal)}>
          <img
            className="max-w-[90px]"
            src={item?.meal?.image?.url}
            alt={item?.meal?.name}
          />
        </Link>
      </td>
      <td className="product-name w-[30%] px-3 py-5 max-sm:block max-sm:w-full max-sm:pl-0 max-sm:px-2 max-sm:pr-5 max-sm:border-b">
        <Link
          to={URLS.menu.viewMeal(item.meal)}
          className="hover:text-primary-hover duration-700 transition-all ease-in-out">
          {item?.meal?.name}
        </Link>
      </td>
      <td className="product-price w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
        <label className="hidden max-sm:block text-[12px] text-[#1e1d23] font-normal">
          {trans("price")}
        </label>
        <span>{price(Number(item?.meal.price))}</span>
      </td>
      <td className="product-quantity w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
        <label className="hidden max-sm:block text-[12px] text-[#1e1d23] font-normal">
          {trans("quantity")}
        </label>
        <div className="quantity">
          <input
            type="number"
            name="product-quantity"
            id={`quantity${item?.id}`}
            value={amount}
            onChange={e => handleQuantityChange(e.target.value)}
            className="w-[80px] h-[40px] p-3 border text-center rounded-md"
          />
        </div>
      </td>
      <td className="product-subtotal w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3">
        <label className="hidden max-sm:block text-[12px] text-[#1e1d23] font-normal">
          {trans("subtotal")}
        </label>
        <span>{price(Number(item.total.subtotal))}</span>
      </td>
    </tr>
  );
}
