import { trans } from "@mongez/localization";
import {
  addressesAtom,
  defaultAddressAtom,
} from "apps/front-office/checkout/atom/checkout-atoms";
import { getAddressesData } from "apps/front-office/checkout/utils/get-address-data";
import Loader, {
  Error,
} from "apps/front-office/design-system/components/Indicators/Indicators";
import AddAddressBookForm from "../AddAddressBookForm";
import AddNewAddressesForm from "../AddNewAddressesForm";
import BookAddresses from "../BookAddresses";
import DefaultSelectedAddress from "../DefaultSelectedAddress";

export default function ShippingDetails() {
  const { state, error } = getAddressesData();
  const addresses = addressesAtom.useValue();

  const addressesContent = defaultAddressAtom.useValue() ? (
    <DefaultSelectedAddress />
  ) : (
    <>
      <BookAddresses />
      <AddNewAddressesForm />
    </>
  );

  if (state === "loading") {
    return (
      <div className="w-full flex flex-col gap-3">
        <h3 className="font-bold text-[1.6em] clear-both">
          {trans("shippingDetails")}
        </h3>
        <div className="border rounded-xl py-4">
          <Loader className="h-fit" size={40} />
        </div>
      </div>
    );
  }

  if (state === "error" && error) return <Error error={error} />;

  return (
    <div className="w-full gap-3">
      <h3 className="font-bold text-[1.6em] clear-both">
        {trans("shippingDetails")}
      </h3>
      <div className="border rounded-xl p-3 w-full">
        <div>
          {addresses.length === 0 ? <AddAddressBookForm /> : addressesContent}
        </div>
      </div>
    </div>
  );
}
