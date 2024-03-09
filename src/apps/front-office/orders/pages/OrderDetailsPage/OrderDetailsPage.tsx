import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { toastError } from "shared/hooks/useToastMessage";
import { getOrder } from "../../services/orders-service";
import { Order } from "../OrdersPage/components/OrdersListItem/OrdersListItem";
import OrderBottomDetails from "./components/OrderBottomDetails";
import OrderMealsList from "./components/OrderMealsList";
import OrderTopDetails from "./components/OrderTopDetails";

export type OrderDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const [order, setOrder] = useState<Order | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useOnce(() => {
    getOrder(params.id)
      .then(response => {
        setOrder(response.data.order);
        setIsLoading(false);
      })
      .catch(_error => {
        toastError(_error || trans("someThingWantWrong"));
      });
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!order) return null;

  return (
    <>
      <Helmet title={trans("orderDetails")} />
      <Breadcrumb
        navItems={[
          { name: trans("orders"), url: URLS.orders.list },
          { name: trans("orderDetails") },
        ]}
        title={`#${order.id}`}
      />
      <div className="order-details container pt-[60px] pb-[100px] max-lg:pb-[80px] max-sm:pb-[70px]">
        <div className=" overflow-hidden">
          <div className="flex md:flex-row-reverse flex-col-reverse justify-between gap-5 w-full">
            <div className="flex-grow">
              <OrderMealsList order={order} />
            </div>
            <div className="w-full md:w-1/2 details mt-9 px-5 py-8 mb-5 border border-[#eee] rounded-lg max-sm:px-4 max-sm:py-4">
              {/* Top Details */}
              <OrderTopDetails
                orderDate={order.createdAt.text}
                orderStatusText={order.statusText}
                orderStatus={order.status}
              />
              {/* Order Menu */}
              {/* <OrderMenu orderMenu={orderDetails.orderMenu} /> */}
              {/* Bottom Details */}
              <OrderBottomDetails
                totalPrice={order.total.finalPrice || order.total.price}
                address={order.shippingAddress.address}
                paymentMethod={order.paymentMethod}
              />
            </div>
          </div>
          {/* <BaseLink
            href={URLS.cart}
            variant="primary"
            className="float-right px-8 py-3 text-[16px] max-sm:w-full">
            {trans("reorder")}
          </BaseLink> */}
        </div>
      </div>
    </>
  );
}
