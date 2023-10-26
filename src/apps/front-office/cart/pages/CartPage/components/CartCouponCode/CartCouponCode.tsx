import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/Button";

export type CartCouponCodeProps = {
  // props go here
};
export default function CartCouponCode(props: CartCouponCodeProps) {
  return (
    <form className="coupon flex float-left max-sm:flex max-sm:flex-col max-sm:p-8 max-sm:border-2 max-sm:border-dashed max-sm:border-[#e5e5e5]">
      <input
        type="text"
        placeholder="Coupon code"
        className="min-w-[120px] h-[54px] p-3 mr-2 text-[15px] font-normal border border-[#e5e5e5] rounded-md placeholder-[#cbcbcb] max-sm:mb-3 max-sm:mr-0"
      />
      <Button
        type="submit"
        variant="primary"
        className="uppercase px-11 font-semibold max-xl:px-5">
        {trans("Apply coupon")}
      </Button>
    </form>
  );
}
