import { trans } from "@mongez/localization";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import CheckoutInputRadio from "../../Form/CheckoutInputRadio";
import UserOrderDetailsTable from "../UserOrderDetailsTable";

export type UserOrderDetailsProps = {
  clearErrors: () => void;
};
export default function UserOrder({ clearErrors }: UserOrderDetailsProps) {
  return (
    <div className="xl:w-[40%] w-full border-[6px] border-border h-fit py-5 px-9">
      <h3 className="font-bold text-[1.6em] clear-both">
        {trans("yourOrder")}
      </h3>
      <UserOrderDetailsTable />

      <CheckoutInputRadio name="payment" label="Direct bank transfer" />
      <CheckoutInputRadio name="payment" label="Check payments" />
      <CheckoutInputRadio name="payment" label="Cash on delivery" />
      <CheckoutInputRadio name="payment" label="paypal" />

      <SubmitButton onClick={clearErrors}>submit</SubmitButton>
    </div>
  );
}
