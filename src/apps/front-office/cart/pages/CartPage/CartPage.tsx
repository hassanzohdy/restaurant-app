import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import EmptyComponent from "apps/front-office/design-system/components/EmptyComponent";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import React from "react";
import { TbShoppingCartQuestion } from "react-icons/tb";
import CartProductsTable from "./components/CartProductsTable";
import CartTotals from "./components/CartTotals";

const cartProductsList = [
  // {
  //   id: "1",
  //   name: "BBQ chicken breast",
  //   thumbnail: popularMealImage1,
  //   price: "£8.00",
  //   subtotal: "£8.00",
  // },
  // {
  //   id: "2",
  //   name: "Bacon Burger",
  //   thumbnail: popularMealImage2,
  //   price: "£8.00",
  //   subtotal: "£8.00",
  // },
  // {
  //   id: "3",
  //   name: "Apricot Chicken",
  //   thumbnail: popularMealImage3,
  //   price: "£8.00",
  //   subtotal: "£8.00",
  // },
];

const emptyCartInfo = {
  title: trans("emptyCart"),
  description: trans("cartEmptyDescription"),
  icon: <TbShoppingCartQuestion size="150" />,
};

function _CartPage() {
  return (
    <>
      <Helmet title="Cart" />
      <Breadcrumb title="Cart" navItems={[{ name: "cart" }]} />
      {cartProductsList.length > 0 ? (
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
      ) : (
        <EmptyComponent {...emptyCartInfo} />
      )}
    </>
  );
}

const CartPage = React.memo(_CartPage);
export default CartPage;
