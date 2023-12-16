import OrderNotes from "../OrderNotes";
import PaymentDetails from "../PaymentDetails";
import ShippingDetails from "../ShippingDetails";
import OrderDetails from "../UserOrder";

export default function CheckoutDetails() {
  return (
    <div className="gap-2 flex flex-col overflow-hidden container">
      <div className="flex xl:flex-row flex-col gap-10 w-full">
        <div className="xl:w-[60%] w-full flex flex-col gap-5">
          <ShippingDetails />
          <PaymentDetails />
          <OrderNotes />
        </div>
        <OrderDetails />
      </div>
    </div>
  );
}
