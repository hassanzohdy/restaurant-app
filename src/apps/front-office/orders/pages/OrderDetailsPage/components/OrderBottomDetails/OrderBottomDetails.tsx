import { trans } from "@mongez/localization";

export type OrderBottomDetailsProps = {
  totalPrice: number;
  address: string;
  paymentMethod: string;
};
export default function OrderBottomDetails({
  totalPrice,
  address,
  paymentMethod,
}: OrderBottomDetailsProps) {
  return (
    <div className="bottom-details px-6 text-[20px] font-bold  capitalize max-md:px-4 max-md:text-[18px] max-sm:px-0 max-sm:text-[14px]">
      <div className="total flex align-middle justify-between mb-3 max-md:mb-1">
        <span>{trans("total")}</span>{" "}
        <span className="text-[24px] text-secondary font-bold max-sm:text-[16px]">
          ${totalPrice}
        </span>
      </div>
      <div className="address flex align-middle justify-between mb-3 max-md:mb-1">
        <span>{trans("deliveryAddress")}</span>{" "}
        <span className="text-[18px] font-semibold max-md:text-[16px] max-sm:text-[12px]">
          {address}
        </span>
      </div>
      <div className="payment flex align-middle justify-between ">
        <span>{trans("payment")}</span>{" "}
        <span className="text-[18px] font-semibold max-md:text-[16px] max-sm:text-[12px]">
          {paymentMethod}
        </span>
      </div>
    </div>
  );
}
