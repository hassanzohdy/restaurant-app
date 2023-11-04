import { trans } from "@mongez/localization";
import { Form } from "src/form";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { useRef } from "react";
import useFocusOnToggle from "shared/hooks/useFocusOnToggle";
import "./_CouponForm.scss";

export type CouponFormProps = {
  toggleCoupon: boolean;
};
export default function CouponForm({ toggleCoupon }: CouponFormProps) {
  const couponInput = useRef(null);

  useFocusOnToggle(couponInput.current, toggleCoupon);

  return (
    <div
      className={
        "transition-all sm:focus-within:h-[90px] focus-within:h-[200px] " +
        (toggleCoupon ? "sm:h-[90px] h-[200px]" : "h-0")
      }>
      <Form className="couponForm">
        <span className="font-light text-primary-text">
          {trans("couponLabel")}
        </span>
        <div className="flex sm:items-center flex-col sm:flex-row gap-3 mt-3">
          <TextInput
            name="coupon"
            placeholder={trans("couponPlaceholder")}
            ref={couponInput}
          />
          <SubmitButton className="bg-primary-main text-black font-bold text-sm uppercase py-[11px] px-6 rounded-md">
            {trans("applyCoupon")}
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
}
