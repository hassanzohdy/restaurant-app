import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { FaSpinner, FaTruck } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { logo } from "shared/assets";

export type Order = {
  id: string;
  createdAt: {
    text: string;
  };
  items: {
    id: number;
    price: number;
    meal: Meal;
    quantity: number;
    total: {
      price: number;
    };
  }[];
  paymentMethod: string;
  statusText: string;
  status: string;
  shippingAddress: {
    id: string;
    address: string;
  };
  total: {
    quantity: number;
    finalPrice: number;
    subTotal: number;
    loyaltyPoints: number;
    coupon: number;
    price: number;
  };
};
export type OrdersListItemProps = {
  order: Order;
};

export const getStatusIconAndColor = (status: string) => {
  switch (status) {
    case "pending":
      return {
        icon: <FaSpinner className="text-cyan-600" size="25" />,
        textColor: "text-black",
      };

    case "shipped":
      return {
        icon: <FaTruck className="text-orange-500" size="25" />,
        textColor: "text-black",
      };
    case "delivered":
      return {
        icon: <FaCircleCheck className="text-green-500" size="25" />,
        textColor: "text-black",
      };
  }
};

export default function OrdersListItem({ order }: OrdersListItemProps) {
  const status = getStatusIconAndColor(order.status);

  return (
    <li className="orders-list-item p-6 mb-5 last:mb-0 rounded-lg bg-[#f8f5f0] border border-[#eee] max-sm:px-4 max-sm:py-5">
      <div className="top-details flex items-center justify-between pb-5 mb-6 text-[20px] text-primary-text font-semibold border-b-2 border-dashed border-[#ddd] max-sm:pb-3 max-sm:mb-4 max-sm:text-[16px] ">
        <span className="flex items-center capitalize gap-2">
          {status?.icon}
          <span className={status?.textColor}>{order.statusText}</span>
        </span>
        <p className="">
          {trans("total")} :{" "}
          <span className="text-[22px] text-bodyTextColor font-bold max-sm:text-[16px]">
            {price(order.total.finalPrice || order.total.price)}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
        <div className="flex max-sm:mb-4 gap-4">
          <span className="flex flex-custom items-center justify-center image w-[80px] h-[65px] rounded-md bg-[#ddd] p-2 mr-3">
            <img src={logo} alt="" className="max-w-full" />
          </span>
          <div>
            <h3 className="name text-[20px] capitalize font-semibold max-sm:text-[18px]">
              <Link to={URLS.orders.viewOrder(order)}>
                {trans("order")} #{order.id}
              </Link>
            </h3>
            <span className="order-date text-[15px] text-primary-text capitalize font-semibold max-sm:text-[12px]">
              {order.createdAt.text}
            </span>
          </div>
        </div>
        <BaseLink
          href={URLS.orders.viewOrder(order)}
          variant="primary"
          className="px-3 py-2 max-sm:w-full">
          {trans("orderDetails")}
        </BaseLink>
      </div>
    </li>
  );
}
