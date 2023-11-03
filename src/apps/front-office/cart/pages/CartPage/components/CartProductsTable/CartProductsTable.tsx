import { trans } from "@mongez/localization";
import { IconX } from "@tabler/icons-react";
import { Button } from "apps/front-office/design-system/components/Button";
import CartCouponCode from "../CartCouponCode";
import CartProductsTableItem from "../CartProductsTableItem";

export type CartProductsTableProps = {
  cartProducts: {
    id: string;
    name: string;
    thumbnail: string;
    price: string;
    subtotal: string;
  }[];
};
export default function CartProductsTable({
  cartProducts,
}: CartProductsTableProps) {
  return (
    <div className="cart-products-table max-lg:mb-8 max-sm:mb-5">
      <table className="table-auto w-full bg-white text-left text-[15px] font-bold capitalize max-md:text-[12px]">
        <thead className="max-sm:hidden">
          <tr className="bg-white border-b uppercase text-[12px]">
            <th className="product-remove px-3 pb-5">
              <IconX size="0" />
            </th>
            <th className="product-thumbnail px-3 pb-5 text-[0px]">
              {trans("productThumbnail")}
            </th>
            <th scope="col" className="product-name px-3 pb-5 text-[12px]">
              {trans("product")}
            </th>
            <th scope="col" className="product-price px-3 pb-5">
              {trans("price")}
            </th>
            <th scope="col" className="product-quantity px-3 pb-5">
              {trans("quantity")}
            </th>
            <th scope="col" className="product-subtotal px-3 pb-5">
              {trans("subTotal")}
            </th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map(product => (
            <CartProductsTableItem key={product.id} productDetails={product} />
          ))}
        </tbody>
        <tfoot>
          <tr className="actions">
            <td
              colSpan={6}
              className="pt-8 pb-0 max-sm:flex max-sm:flex-col-reverse max-sm:pt-5">
              <CartCouponCode />
              <Button
                type="submit"
                disabled
                variant="primary"
                className="h-[54px] uppercase px-11 font-semibold cursor-not-allowed opacity-[.5] float-right max-sm:mb-5">
                {trans("Update cart")}
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
