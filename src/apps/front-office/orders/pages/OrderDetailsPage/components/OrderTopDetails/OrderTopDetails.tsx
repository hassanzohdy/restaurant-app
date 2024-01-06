import { getStatusIconAndColor } from "../../../OrdersPage/components/OrdersListItem/OrdersListItem";

export type OrderTopDetailsProps = {
  orderDate: string;
  orderStatus: string;
  orderStatusText: string;
};

export default function OrderTopDetails({
  orderDate,
  orderStatus,
  orderStatusText,
}: OrderTopDetailsProps) {
  const status = getStatusIconAndColor(orderStatus);

  return (
    <>
      <div className="top-details pb-4 mb-4 border-b-2 border-dashed border-[#eee]">
        <div
          className={`order-status flex items-center px-3 py-2 gap-1 capitalize text-[18px] text-white font-semibold rounded-md max-sm:px-2 max-sm:py-1 max-sm:text-[14px]`}>
          <span>{status?.icon}</span>
          <span className={status?.textColor}>{orderStatusText}</span>
        </div>
        <div>
          <span className="date">{orderDate}</span>
        </div>
      </div>
    </>
  );
}
