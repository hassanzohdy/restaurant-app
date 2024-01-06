import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { useEvent } from "@mongez/react-hooks";
import {
  toastError,
  toastSuccess,
} from "apps/front-office/account/hooks/useToastMessage";
import { cartAtom } from "apps/front-office/cart/atoms/cart-atom";
import {
  applyCoupon,
  removeCoupon,
} from "apps/front-office/checkout/services/checkout-services";
import { Button } from "apps/front-office/design-system/components/Button";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import { cn } from "apps/front-office/design-system/utils/cn";
import { useState } from "react";

export default function CouponCode() {
  const couponCode = cartAtom.use("coupon")?.code;
  const [coupon, setCoupon] = useState(couponCode);

  useEvent(() =>
    cartAtom.onChange(cart => {
      if (cart.coupon) {
        setCoupon(cart.coupon.code);
      } else {
        setCoupon("");
      }
    }),
  );

  const validateCoupon = ({ values }: FormSubmitOptions) => {
    applyCoupon(values.code)
      .then(() => {
        toastSuccess(trans("couponHasBeenApplied"));
      })
      .catch(error => {
        const errorText = error?.response?.data?.error || error.message;

        toastError(errorText);
      });
  };

  const removeCouponAction = () => {
    removeCoupon()
      .then(() => {
        toastSuccess(trans("removedCouponSuccessfully"));
      })
      .catch(error => {
        const errorText = error?.response?.data?.error || error.message;

        toastError(errorText);
      });
  };

  return (
    <div className="w-full">
      <Form
        className={cn("grid grid-rows-[1fr] transition-all duration-500")}
        onSubmit={validateCoupon}>
        <div className="overflow-hidden flex flex-row gap-3 items-center">
          <TextInputV2
            placeholder={trans("enterYourCouponCode")}
            className="flex-1 disabled:bg-zinc-100"
            name="code"
            key={coupon}
            defaultValue={coupon}
            disabled={coupon}
            required
          />
          {coupon && (
            <Button
              onClick={removeCouponAction}
              className="bg-secondary text-[0.9em] text-white transition-colors font-bold py-1 px-3 h-[80%] rounded-md hover:bg-secondary w-fit capitalize ">
              {trans("change")}
            </Button>
          )}
          {!coupon && (
            <Button
              type="submit"
              className="bg-primary-main text-[0.9em] transition-colors font-bold py-1 px-3 h-[80%] rounded-md hover:bg-primary-hover w-fit capitalize ">
              {trans("apply")}
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}
