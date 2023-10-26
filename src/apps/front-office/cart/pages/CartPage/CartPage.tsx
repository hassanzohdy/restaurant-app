import Helmet from "@mongez/react-helmet";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import popularMealImage1 from "assets/images/about-us/popular-meal-image-1.png";
import popularMealImage2 from "assets/images/about-us/popular-meal-image-2.png";
import popularMealImage3 from "assets/images/about-us/popular-meal-image-3.png";
import React from "react";
import CartProductsTable from "./components/CartProductsTable";
import CartTotals from "./components/CartTotals";

const cartProductsList = [
  {
    id: "1",
    name: "BBQ chicken breast",
    thumbnail: popularMealImage1,
    price: "£8.00",
    subtotal: "£8.00",
  },
  {
    id: "2",
    name: "Bacon Burger",
    thumbnail: popularMealImage2,
    price: "£8.00",
    subtotal: "£8.00",
  },
  {
    id: "3",
    name: "Apricot Chicken",
    thumbnail: popularMealImage3,
    price: "£8.00",
    subtotal: "£8.00",
  },
];

function _CartPage() {
  return (
    <>
      <Helmet title="Cart" />
      <Breadcrumb title="Cart" navItems={[{ name: "cart" }]} />
      <div className="cart-details py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
        <div className="container">
          <div className="flex justify-between flex-wrap">
            <div className="w-[calc(70%-40px)] max-xl:w-[calc(65%-30px)] max-lg:w-[100%]">
              <CartProductsTable cartProducts={cartProductsList} />
            </div>
            <div className="w-[30%] max-xl:w-[35%] max-lg:w-[100%]">
              <CartTotals />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const CartPage = React.memo(_CartPage);
export default CartPage;
