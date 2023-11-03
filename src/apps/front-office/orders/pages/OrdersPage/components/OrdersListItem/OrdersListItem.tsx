import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";
import { logo } from "shared/assets";

export type OrdersListItemProps = {
  order: {
    id: string;
    orderNumber: string;
    orderDate: string;
    totalPrice: number;
    delivered: boolean;
  };
};
export default function OrdersListItem({ order }: OrdersListItemProps) {
  return (
    <li className="orders-list-item p-6 mb-5 last:mb-0 rounded-lg bg-[#f8f5f0] border border-[#eee] max-sm:px-4 max-sm:py-5">
      <div className="top-details flex items-center justify-between pb-5 mb-6 text-[20px] text-primary-text font-semibold border-b-2 border-dashed border-[#ddd] max-sm:pb-3 max-sm:mb-4 max-sm:text-[16px] ">
        <span className="flex items-center text-secondary capitalize">
          <IconCircleCheckFilled className="mr-1" size="28" />{" "}
          {order.delivered && trans("delivered")}{" "}
        </span>
        <p className="">
          {trans("total")} :{" "}
          <span className="text-[22px] text-bodyTextColor font-bold max-sm:text-[16px]">
            ${order.totalPrice}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
        <div className="flex max-sm:mb-4">
          <span className="flex flex-custom items-center justify-center image w-[80px] h-[65px] rounded-md bg-[#ddd] p-2 mr-3">
            <img src={logo} alt="" className="max-w-full" />
          </span>
          <div>
            <h3 className="name text-[20px] capitalize font-semibold max-sm:text-[18px]">
              <Link to={URLS.orders.viewOrder(order)}>
                {trans("order")} #{order.orderNumber}
              </Link>
            </h3>
            <span className="order-date text-[15px] text-primary-text capitalize font-semibold max-sm:text-[12px]">
              {order.orderDate}
            </span>
          </div>
        </div>
        <BaseLink
          href={URLS.orders.viewOrder(order)}
          variant="primary"
          className="px-3 py-2 max-sm:w-full">
          Order Details
        </BaseLink>
      </div>
    </li>
  );
}
