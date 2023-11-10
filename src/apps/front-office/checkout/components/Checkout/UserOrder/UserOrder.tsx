import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import URLS from "apps/front-office/utils/urls";
import UserOrderDetailsTable from "../UserOrderDetailsTable";
import UserPaymentMethod from "../UserPaymentMethod";

export default function UserOrder() {
  return (
    <div className="xl:w-[40%] w-full border-[6px] border-border h-fit py-5 px-9">
      <h3 className="font-bold text-[1.6em] clear-both">
        {trans("yourOrder")}
      </h3>
      <UserOrderDetailsTable />

      <UserPaymentMethod />

      <p className="font-thin text-sm">
        {trans("personalDataNotice")}{" "}
        <Link
          className="text-primary-main font-normal hover:text-primary-hover focus:text-primary-hover"
          to={URLS.privacyPolicy}>
          {trans("privacyPolicy")}
        </Link>
        .
      </p>
      <SubmitButton variant="primary">
        <div className="text-base font-bold py-2 text-black uppercase">
          {trans("placeOrder")}
        </div>
      </SubmitButton>
    </div>
  );
}
