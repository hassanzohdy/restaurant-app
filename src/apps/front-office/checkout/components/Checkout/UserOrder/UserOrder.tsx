import { trans } from "@mongez/localization";
import { Link, navigateTo } from "@mongez/react-router";
import { checkoutAtom } from "apps/front-office/checkout/atom/checkout-atoms";
import { finishCheckout } from "apps/front-office/checkout/services/checkout-services";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import URLS from "apps/front-office/utils/urls";
import { toastError, toastSuccess } from "shared/hooks/useToastMessage";
import OrderDetailsTable from "../OrderDetailsTable";

export default function UserOrder() {
  const submitCheckout = () => {
    const checkout = checkoutAtom.value;

    if (!checkout.shippingAddress) {
      return toastError(trans("pleaseSelectShippingAddress"));
    }

    if (!checkout.paymentMethod) {
      return toastError(trans("selectPaymentMethod"));
    }

    finishCheckout(checkout)
      .then(response => {
        navigateTo(URLS.orders.viewOrder(response.data.order));
        toastSuccess(trans("orderCreatedSuccessfully"));
      })
      .catch(error => {
        const errorText = error?.response?.data?.error || error.message;
        toastError(errorText);
      });
  };

  return (
    <div className="xl:w-[40%] w-full border-[6px] border-border h-fit py-5 px-9">
      <h3 className="font-bold text-[1.6em] clear-both">
        {trans("orderSummary")}
      </h3>
      <OrderDetailsTable />

      <p className="font-thin text-sm">
        {trans("personalDataNotice")}{" "}
        <Link
          className="text-primary-main font-normal hover:text-primary-hover focus:text-primary-hover"
          to={URLS.privacyPolicy}>
          {trans("privacyPolicy")}
        </Link>
        .
      </p>
      <SubmitButton onClick={submitCheckout} type="button" variant="primary">
        <div className="text-base font-bold py-2 text-black uppercase">
          {trans("placeOrder")}
        </div>
      </SubmitButton>
    </div>
  );
}
