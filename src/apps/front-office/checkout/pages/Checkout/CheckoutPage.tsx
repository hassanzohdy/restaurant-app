import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { cartAtom } from "apps/front-office/cart/atoms/cart-atom";
import EmptyComponent from "apps/front-office/design-system/components/EmptyComponent";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import URLS from "apps/front-office/utils/urls";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useCart2 } from "shared/hooks/use-cart-2";
import CheckoutDetails from "../../components/Checkout/CheckoutDetails";

const emptyCartInfo = {
  title: trans("emptyCart"),
  description: trans("cartEmptyDescription"),
  icon: <TbShoppingCartQuestion size="150" />,
  goBackPath: URLS.menu.list,
};

export default function Checkout() {
  const items = cartAtom.use("items");
  const { useCartLoader } = useCart2();
  const { isLoading } = useCartLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Helmet title={trans("checkout")} />
      <Breadcrumb
        title={trans("checkout")}
        navItems={[{ name: trans("checkout") }]}
      />
      {items ? (
        <div className="my-20">
          <CheckoutDetails />
        </div>
      ) : (
        <EmptyComponent {...emptyCartInfo} />
      )}
    </div>
  );
}
