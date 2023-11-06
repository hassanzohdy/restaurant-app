import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import popularMealImage1 from "assets/images/about-us/popular-meal-image-1.png";
import popularMealImage2 from "assets/images/about-us/popular-meal-image-2.png";
import popularMealImage3 from "assets/images/about-us/popular-meal-image-3.png";
import React from "react";
import OrdersListItem from "../OrdersPage/components/OrdersListItem";

const ordersList = [
  {
    id: "12458667823",
    orderNumber: "1",
    orderMeals: [
      {
        name: "Chicken",
        image: popularMealImage1,
        price: 50,
        quantity: 2,
      },
      {
        name: "Burger",
        image: popularMealImage2,
        price: 50,
        quantity: 2,
      },
      {
        name: "Pizza Douce",
        image: popularMealImage3,
        price: 50,
        quantity: 2,
      },
    ],
    orderDate: "Fri,Mar 17, 2023, 04:46 PM",
    totalPrice: 300,
    address: "Elm Street, 23",
    paymentMethod: "cash on delivery",
    delivered: true,
  },
  {
    id: "12485667869",
    orderNumber: "2",
    orderMeals: [
      {
        name: "Chicken",
        image: popularMealImage1,
        price: 50,
        quantity: 2,
      },
      {
        name: "Burger",
        image: popularMealImage2,
        price: 50,
        quantity: 2,
      },
      {
        name: "Pizza Douce",
        image: popularMealImage3,
        price: 50,
        quantity: 2,
      },
    ],
    orderDate: "Fri,Mar 17, 2023, 04:46 PM",
    totalPrice: 300,
    address: "Elm Street, 23",
    paymentMethod: "cash on delivery",
    delivered: true,
  },
  {
    id: "15658662323",
    orderNumber: "3",
    orderMeals: [
      {
        name: "Chicken",
        image: popularMealImage1,
        price: 50,
        quantity: 2,
      },
      {
        name: "Burger",
        image: popularMealImage2,
        price: 50,
        quantity: 2,
      },
      {
        name: "Pizza Douce",
        image: popularMealImage3,
        price: 50,
        quantity: 2,
      },
    ],
    orderDate: "Fri,Mar 17, 2023, 04:46 PM",
    totalPrice: 300,
    address: "Elm Street, 23",
    paymentMethod: "cash on delivery",
    delivered: true,
  },
];

function _OrdersPage() {
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
            {ordersList.map((order, index) => (
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
