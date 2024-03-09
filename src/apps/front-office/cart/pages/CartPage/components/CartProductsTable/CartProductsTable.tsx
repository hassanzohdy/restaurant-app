import { trans } from "@mongez/localization";
import { CartItem } from "apps/front-office/cart/utils/types";
import { AiOutlineClose } from "react-icons/ai";
import CartProductsTableItem from "../CartProductsTableItem";

export type CartProductsTableProps = {
  cartProducts: CartItem[];
};

export default function CartItemsTable({
  cartProducts,
}: CartProductsTableProps) {
  return (
    <div className="cart-products-table max-lg:mb-8 max-sm:mb-5">
      <table className="table-auto w-full bg-white text-left text-[15px] font-bold capitalize max-md:text-[12px]">
        <thead className="w-full">
          <tr className="bg-white border-b uppercase text-[12px]">
            <th className="product-remove px-3 pb-5">
              <AiOutlineClose size="0" />
            </th>
            <th scope="col" className="px-3 pb-5 text-center">
              {trans("product")}
            </th>
            <th scope="col" className="px-3 pb-5 text-center">
              {trans("price")}
            </th>
            <th scope="col" className="px-3 pb-5 text-center">
              {trans("quantity")}
            </th>
            <th scope="col" className="px-3 pb-5 text-center">
              {trans("subtotal")}
            </th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map(product => (
            <CartProductsTableItem key={product.id} cartItem={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
