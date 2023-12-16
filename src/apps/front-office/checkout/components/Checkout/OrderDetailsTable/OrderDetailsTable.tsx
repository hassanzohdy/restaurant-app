import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/cart/atoms/cart-atom";
import { price } from "apps/front-office/utils/price";

export default function OrderDetailsTable() {
  const items = cartAtom.useValue().items;
  const total = cartAtom.useValue().total.price;

  return (
    <table className="w-full">
      <thead>
        <tr className="flex justify-between text-[#1E1D23] py-4 border-b">
          <th className="text-sm">{trans("product")}</th>
          <th className="text-sm">{trans("subtotal")}</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr
            key={item.meal.id}
            className="flex justify-between text-[#1E1D23] py-4 border-b w-full">
            <th className="text-sm text-black font-thin">
              {item.meal.name} x {item.quantity}
            </th>
            <th className="text-sm">{price(Number(item.totalPrice))}</th>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="flex justify-between text-[#1E1D23] py-4 border-b">
          <th className="text-sm">{trans("subtotal")}</th>
          <th className="text-sm">{price(Number(total))}</th>
        </tr>
        <tr className="grid grid-cols-2 text-[#1E1D23] py-4 border-b">
          <th className="text-sm rtl:text-right ltr:text-left">
            {trans("shipping")}
          </th>
          <th className="text-sm rtl:text-left ltr:text-right font-thin text-black">
            {trans("noShippingOptions")}
          </th>
        </tr>
        <tr className="flex flex-row justify-between items-center text-[#1E1D23] py-4">
          <th className="text-sm rtl:text-right ltr:text-left">
            {trans("total")}
          </th>
          <th className="text-2xl rtl:text-left ltr:text-right font-bold text-primary-main">
            {price(Number(total))}
          </th>
        </tr>
      </tfoot>
    </table>
  );
}
