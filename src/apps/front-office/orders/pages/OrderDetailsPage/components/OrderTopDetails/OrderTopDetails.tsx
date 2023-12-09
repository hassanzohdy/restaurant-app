import { trans } from "@mongez/localization";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineDeliveryDining } from "react-icons/md";

export type OrderTopDetailsProps = {
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
};

export default function OrderTopDetails({
  orderNumber,
  orderDate,
  orderStatus,
}: OrderTopDetailsProps) {
  const statusClasses =
    orderStatus === "delivered"
      ? "bg-secondary"
      : orderStatus === "delivering"
        ? "bg-[#fc8019]"
        : "bg-red-500";

  const statusIcon =
    orderStatus === "delivered" ? (
      <BsCheckCircleFill size="22" />
    ) : orderStatus === "delivering" ? (
      <MdOutlineDeliveryDining size="28" />
    ) : (
      <IoIosCloseCircle size="28" />
    );

  return (
    <>
      <div className="top-details flex items-center justify-between pb-4 mb-4 border-b-2 border-dashed border-[#eee]">
        <div>
          <h3 className="text-[32px] font-bold capitalize mb-1 max-lg:text-[28px] max-md:text-[24px] max-sm:text-[22px]">
            {trans("order")} #{orderNumber}
          </h3>
          <span className="date">{orderDate}</span>
        </div>
        <div
          className={`${statusClasses} order-status flex items-center px-3 py-2 capitalize text-[18px] text-white font-semibold rounded-md max-sm:px-2 max-sm:py-1 max-sm:text-[14px]`}>
          <span className="mr-1">{statusIcon}</span> {orderStatus}
        </div>
      </div>
    </>
  );
}
