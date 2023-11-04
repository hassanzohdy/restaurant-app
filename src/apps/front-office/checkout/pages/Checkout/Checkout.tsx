import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import CheckoutCoupon from "../../components/Checkout/CheckoutCoupon";
import CheckoutDetails from "../../components/Checkout/CheckoutDetails";

export default function Checkout() {
  return (
    <div>
      <Helmet title={trans("checkout")} />
      <Breadcrumb
        title={trans("checkout")}
        navItems={[{ name: trans("checkout") }]}
      />
      <div className="my-20">
        <CheckoutCoupon />
        <CheckoutDetails />
      </div>
    </div>
  );
}
