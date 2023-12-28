import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import EmptyComponent from "apps/front-office/design-system/components/EmptyComponent";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import React, { useState } from "react";
import { TbShoppingCartQuestion } from "react-icons/tb";
import CartMealsTable from "./components/CartMealsTable";
import CartTotals from "./components/CartTotals";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { useOnce } from "@mongez/react-hooks";
import { getCart } from "../../services/cart-service";
import { cartAtom } from "../../atoms/cart-atom";
import useCart from "shared/hooks/useCart";
import Loader, { Error } from "apps/front-office/design-system/components/Indicators/Indicators";

const emptyCartInfo = {
  title: trans("emptyCart"),
  description: trans("cartEmptyDescription"),
  icon: <TbShoppingCartQuestion size="150" />,
};

function _CartPage() {

  const items = cartAtom.use("items");
  const { state, error } = useCart();


  if (state === "loading") {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Helmet title="Cart" />
      <Breadcrumb title={trans("cart")} navItems={[{ name: "cart" }]} />
      {items ? (
        <div className="cart-details py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
          <div className="container">
            <div className="flex justify-between flex-wrap">
              <div className="w-[calc(70%-40px)] max-xl:w-[calc(65%-30px)] max-lg:w-[100%]">
                <CartMealsTable />
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
