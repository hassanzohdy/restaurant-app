import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/cart/atoms/cart-atom";
import { AiOutlineClose } from "react-icons/ai";
import CartCouponCode from "../CartCouponCode";
import CartMealsTableItem from "../CartMealsTableItem";

export default function CartMealsTable() {
  const items = cartAtom.use("items");

  return (
    <div className="cart-products-table max-lg:mb-8 max-sm:mb-5">
      <table className="table-auto w-full bg-white ltr:text-left rtl:text-right text-[15px] font-bold capitalize max-md:text-[12px]">
        <thead className="max-sm:hidden">
          <tr className="bg-white border-b uppercase text-[12px]">
            <th className="product-remove px-3 pb-5">
              <AiOutlineClose size="0" />
            </th>
            <th className="product-thumbnail px-3 pb-5 text-[0px]">
              {trans("productThumbnail")}
            </th>
            <th scope="col" className="product-name px-3 pb-5 text-[12px]">
              {trans("meal")}
            </th>
            <th scope="col" className="product-price px-3 pb-5">
              {trans("price")}
            </th>
            <th scope="col" className="product-quantity px-3 pb-5">
              {trans("quantity")}
            </th>
            <th scope="col" className="product-subtotal px-3 pb-5">
              {trans("subtotal")}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <CartMealsTableItem key={item.id} item={item} />
          ))}
        </tbody>
        <tfoot>
          <tr className="actions">
            <td
              colSpan={6}
              className="pt-8 pb-0 max-sm:flex max-sm:flex-col-reverse max-sm:pt-5">
              <CartCouponCode />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
