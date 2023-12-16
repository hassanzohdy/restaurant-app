import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import Loader, {
  Error,
} from "apps/front-office/design-system/components/Indicators/Indicators";
import URLS from "apps/front-office/utils/urls";
import useCart from "shared/hooks/useCart";
import OrderDetailsTable from "../OrderDetailsTable";

export default function UserOrder() {
  const { state, error } = useCart();

  if (state === "loading") {
    return (
      <div className="xl:w-[40%] w-full border-[6px] border-border h-[200px] py-5 px-9">
        <Loader className="h-full" size={70} />
      </div>
    );
  }

  if (state === "failed" && error) {
    <div className="xl:w-[40%] w-full border-[6px] border-border h-[200px] py-5 px-9">
      <Error error={error} />
    </div>;
  }

  return (
    <div className="xl:w-[40%] w-full border-[6px] border-border h-fit py-5 px-9">
      <h3 className="font-bold text-[1.6em] clear-both">
        {trans("yourOrder")}
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
      <SubmitButton variant="primary">
        <div className="text-base font-bold py-2 text-black uppercase">
          {trans("placeOrder")}
        </div>
      </SubmitButton>
    </div>
  );
}
