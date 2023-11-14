import { trans } from "@mongez/localization";
import { useState } from "react";
import CouponForm from "../CouponForm";

export default function CheckoutCoupon() {
  const [toggleCoupon, setToggleCoupon] = useState(false);
  return (
    <div className="container overflow-hidden">
      <div className="bg-[#3d9cd2] ltr:border-l-8 rtl:border-r-8 mb-5 ltr:border-l-[rgba(0,0,0,.15)] rtl:border-r-[rgba(0,0,0,.15)] w-full px-7 py-5">
        <p className="text-white">
          {trans("haveCoupon")}{" "}
          <button
            className={
              "hover:opacity-70 inline cursor-pointer " +
              (toggleCoupon && "opacity-70")
            }
            onClick={() => setToggleCoupon(prev => !prev)}>
            {trans("enterCode")}
          </button>
        </p>
      </div>
      <CouponForm toggleCoupon={toggleCoupon} />
    </div>
  );
}
