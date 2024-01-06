import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import React, { useState } from "react";
import { getOrdersList } from "../../services/orders-service";
import OrdersListItem from "../OrdersPage/components/OrdersListItem";

function _OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useOnce(() => {
    getOrdersList()
      .then(response => {
        setOrders(response.data.orders);
        setIsLoading(false);
      })
      .catch(_error => {
        // TODO: handle error
      });
  });

  if (isLoading) {
    return <Loader />;
  }

  // TODO: Handle empty orders list

  return (
    <>
      <Helmet title={trans("myOrders")} />
      <Breadcrumb
        title={trans("myOrders")}
        navItems={[{ name: trans("myOrders") }]}
      />
      <div className="orders pt-[60px] pb-[100px] max-lg:pb-[80px] max-sm:pb-[70px]">
        <div className="container">
          <h2 className="text-[24px] text-secondary-text font-bold mb-6 pb-5 border-b-2 border-dashed border-[#eee]">
            {trans("pastOrders")}
          </h2>
          <ul className="orders-list">
            {orders.map((order, index) => (
              <OrdersListItem key={index} order={order} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const OrdersPage = React.memo(_OrdersPage);
export default OrdersPage;
