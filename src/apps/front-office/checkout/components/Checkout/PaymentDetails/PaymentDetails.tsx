import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { Button } from "apps/front-office/design-system/components/Button";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import { cn } from "apps/front-office/design-system/utils/cn";
import { useRef, useState } from "react";
import useFocusOnToggle from "shared/hooks/useFocusOnToggle";

export default function PaymentDetails() {
  const [couponCode, setCouponCode] = useState(false);

  const couponInput = useRef(null);

  useFocusOnToggle(couponInput.current, couponCode);

  return (
    <div className=" gap-3">
      <h3 className="font-bold text-[1.6em] clear-both">
        {trans("paymentDetails")}
      </h3>
      <div className="border rounded-xl p-3 flex gap-4 flex-col">
        <div>
          <h4 className="font-bold text-[1.3em] clear-both border-b mb-2">
            {trans("paymentOptions")}
          </h4>
          <div className="flex flx-row gap-2 bg-border border-gray-400 border rounded-md ">
            <input
              type="radio"
              name="paymentMethod"
              checked={true}
              onChange={() => null}
              className="cursor-pointer ltr:ml-2 rtl:mr-2"
            />
            <label
              htmlFor="paymentMethod"
              className="cursor-pointer w-full h-full py-2 flex flex-row justify-between items-center gap-2">
              {trans("cashOnDelivery")}
            </label>
          </div>
        </div>
        {/* COUPON CODE */}
        <div>
          <h4 className="text-[1em] mt-4 clear-both cursor-pointer">
            <input
              type="checkbox"
              name="couponCode"
              id="couponCode"
              onChange={() => setCouponCode(prev => !prev)}
            />
            <label
              htmlFor="couponCode"
              className="ltr:ml-2 rtl:mr-2 cursor-pointer w-full">
              {trans("couponCode")}
            </label>
          </h4>
          <Form
            className={cn(
              "grid grid-rows-[0fr] transition-all duration-500",
              couponCode && "grid-rows-[1fr]",
            )}>
            <div className="overflow-hidden flex flex-row gap-3 items-center">
              <TextInputV2
                ref={couponInput}
                placeholder={trans("enterYourCouponCode")}
                className="flex-1"
              />
              <Button className="bg-primary-main text-[0.9em] transition-colors font-bold py-1 px-3 h-[80%] rounded-md hover:bg-primary-hover w-fit capitalize ">
                {trans("apply")}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
