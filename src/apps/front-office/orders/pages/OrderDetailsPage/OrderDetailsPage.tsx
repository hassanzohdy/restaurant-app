import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import URLS from "apps/front-office/utils/urls";
import popularMealImage1 from "assets/images/about-us/popular-meal-image-1.png";
import popularMealImage2 from "assets/images/about-us/popular-meal-image-2.png";
import popularMealImage3 from "assets/images/about-us/popular-meal-image-3.png";
import OrderBottomDetails from "./components/OrderBottomDetails";
import OrderTopDetails from "./components/OrderTopDetails";

const orderDetails = {
  id: "15658662323",
  orderNumber: "3",
  orderMenu: [
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
  orderStatus: "delivering",
};

export default function OrderDetailsPage() {
  return (
    <>
      <Helmet title={trans("orderDetails")} />
      <Breadcrumb
        title={trans("orderDetails")}
        navItems={[{ name: trans("orderDetails") }]}
      />
      <div className="order-details pt-[60px] pb-[100px] max-lg:pb-[80px] max-sm:pb-[70px]">
        <div className="container overflow-hidden">
          <div className="details px-5 py-8 mb-5 border border-[#eee] rounded-lg max-sm:px-4 max-sm:py-4">
            {/* Top Details */}
            <OrderTopDetails
              orderNumber={orderDetails.orderNumber}
              orderDate={orderDetails.orderDate}
              orderStatus={orderDetails.orderStatus}
            />
            {/* Order Menu */}
            {/* <OrderMenu orderMenu={orderDetails.orderMenu} /> */}
            {/* Bottom Details */}
            <OrderBottomDetails
              totalPrice={orderDetails.totalPrice}
              address={orderDetails.address}
              paymentMethod={orderDetails.paymentMethod}
            />
          </div>
          <BaseLink
            href={URLS.cart}
            variant="primary"
            className="float-right px-8 py-3 text-[16px] max-sm:w-full">
            {trans("reOrder")}
          </BaseLink>
        </div>
      </div>
    </>
  );
}
