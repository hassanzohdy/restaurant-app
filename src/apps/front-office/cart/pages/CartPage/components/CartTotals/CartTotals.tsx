import { trans } from "@mongez/localization";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";

export default function CartTotals() {
  return (
    <div className="cart-totals pt-4 pb-7 px-10 bg-white border-[6px] border-[#e5e5e5] max-xl:px-5">
      <h3 className="text-[18px] uppercase font-bold pb-3 border-b ">
        {trans("cartTotals")}
      </h3>
      <ul className="mb-5 max-sm:mb-1">
        <li className="flex justify-between items-center py-4 border-b">
          <strong className="w-[35%] flex-custom capitalize text-[15px] text-black font-semibold">
            {trans("subtotal")}
          </strong>
          <span className="text-[18px] font-bold text-right">£37.25</span>
        </li>
        <li className="flex justify-between py-4 border-b">
          <strong className="w-[35%] flex-custom capitalize text-[15px] text-black font-semibold max-xl:w-[30%] max-xl:text[14px]">
            {trans("shipping")}
          </strong>
          <span className="text-[15px] text-primary-text text-right max-xl:text-[14px] max-sm:text-[12px]">
            {trans("shippingCosts")}
          </span>
        </li>
        <li className="flex justify-between items-center py-7">
          <strong className="w-[35%] flex-custom capitalize text-[15px] text-black font-semibold">
            {trans("total")}
          </strong>
          <span className="text-[24px] font-bold text-right text-primary-main">
            £37.25
          </span>
        </li>
      </ul>
      <BaseLink
        href={URLS.checkout.page}
        className="w-full h-[54px]"
        variant="primary">
        {trans("proceedToCheckout")}
      </BaseLink>
    </div>
  );
}
