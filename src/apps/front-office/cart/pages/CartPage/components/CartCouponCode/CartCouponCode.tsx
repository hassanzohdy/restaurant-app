import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/Button";

export default function CartCouponCode() {
  return (
    <form className="coupon flex float-left max-sm:flex max-sm:flex-col max-sm:p-8 max-sm:border-2 max-sm:border-dashed max-sm:border-[#e5e5e5]">
      <input
        type="text"
<<<<<<< HEAD
        placeholder={trans("couponCode")}
=======
        placeholder="Coupon code"
>>>>>>> c3cb905dbd9ce38a164b3376d827395fc683c76e
        className="min-w-[120px] h-[54px] p-3 mr-2 text-[15px] font-normal border border-[#e5e5e5] rounded-md placeholder-[#cbcbcb] max-sm:mb-3 max-sm:mr-0"
      />
      <Button
        type="submit"
        variant="primary"
        className="h-[54px] uppercase px-11 font-semibold max-xl:px-5">
<<<<<<< HEAD
        {trans("applyCoupon")}
=======
        {trans("Apply coupon")}
>>>>>>> c3cb905dbd9ce38a164b3376d827395fc683c76e
      </Button>
    </form>
  );
}
