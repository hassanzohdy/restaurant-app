import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { cartAtom } from "apps/front-office/cart/atoms/cart-atom";
import EmptyComponent from "apps/front-office/design-system/components/EmptyComponent";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import React from "react";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useCart2 } from "shared/hooks/use-cart-2";
import CartMealsTable from "./components/CartMealsTable";
import CartTotals from "./components/CartTotals";

const emptyCartInfo = {
  title: trans("emptyCart"),
  description: trans("cartEmptyDescription"),
  icon: <TbShoppingCartQuestion size="150" />,
};

function _CartPage() {
  const { useCartLoader } = useCart2();
  const { isLoading } = useCartLoader();
  const cart = cartAtom.useValue();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet title="Cart" />
      <Breadcrumb title="Cart" navItems={[{ name: "cart" }]} />
      {cart.items?.length > 0 ? (
        <div className="cart-details py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
          <div className="container">
            <div className="flex justify-between flex-wrap">
              <div className="w-[calc(70%-40px)] max-xl:w-[calc(65%-30px)] max-lg:w-[100%]">
                <CartMealsTable />
              </div>
              <div className="w-[30%] max-xl:w-[35%] max-lg:w-[100%]">
                <CartTotals cartItems={cart.items} />
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
