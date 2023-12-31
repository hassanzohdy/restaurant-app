import { trans } from "@mongez/localization";
import {
  addressesAtom,
  checkoutAtom,
  defaultAddressAtom,
} from "apps/front-office/checkout/atom/checkout-atoms";
import { Button } from "apps/front-office/design-system/components/Button";
import { useEffect } from "react";

export default function DefaultSelectedAddress() {
  const addresses = addressesAtom.useValue();

  const selectedAddress = addresses.find(address => address.isPrimary);

  if (!selectedAddress) {
    defaultAddressAtom.update(false);
    return null;
  }

  useEffect(() => {
    if (selectedAddress) {
      checkoutAtom.change("shippingAddress", selectedAddress.id);
    }
  }, [selectedAddress]);

  const handelChangeAddress = () => {
    defaultAddressAtom.update(false);
  };

  return (
    <div className="w-full">
      <div>
        <span className="font-bold">{trans("fullName")} :</span>{" "}
        {selectedAddress.firstName} {selectedAddress.lastName}
      </div>
      <div>
        <span className="font-bold">{trans("streetAddress")} :</span>{" "}
        {selectedAddress.address}
      </div>
      <div>
        <span className="font-bold">{trans("phoneNumber")} :</span>{" "}
        {selectedAddress.phoneNumber}
      </div>
      <div className="w-full flex justify-end">
        <Button
          className="bg-primary-main py-1 px-2 rounded-xl hover:bg-primary-hover mt-3"
          onClick={handelChangeAddress}>
          {trans("changeThisAddress")}
        </Button>
      </div>
    </div>
  );
}
