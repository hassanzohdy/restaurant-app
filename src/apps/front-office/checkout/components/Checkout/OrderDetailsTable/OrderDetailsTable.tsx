import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/cart/atoms/cart-atom";
import { price } from "apps/front-office/utils/price";
import CouponCode from "../CouponCode";

export default function OrderDetailsTable() {
  const items = cartAtom.use("items");
  const total = cartAtom.use("total").price;

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
            className="flex justify-between items-center text-[#1E1D23] py-4 border-b w-full">
            <th className="text-sm text-black flex items-center gap-2">
              <div className=" bg-border rounded-[44%] w-[64px] ">
                <img src={item.meal.image.url} alt={item.meal.name} />
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="text-primary-text">{item.meal.name}</div>
                <div className="text-primary-main">x {item.quantity}</div>
              </div>
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
        <tr className="flex py-4 border-b">
          <CouponCode />
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
