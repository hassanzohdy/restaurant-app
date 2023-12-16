import { trans } from "@mongez/localization";
import {
  addressesAtom,
  defaultAddressAtom,
} from "apps/front-office/checkout/atom/checkout-atoms";
import { Button } from "apps/front-office/design-system/components/Button";

export default function DefaultSelectedAddress() {
  const addresses = addressesAtom.useValue();

  const selectedAddress = addresses.find(address => address.isPrimary);

  if (!selectedAddress) {
    defaultAddressAtom.update(false);
    return null;
  }

  const handelChangeAddress = () => {
    defaultAddressAtom.update(false);
  };

  return (
    <div className="w-full">
      <h4 className="font-bold text-[1.3em] clear-both border-b mb-2">
        {trans("selectedAddress")}
      </h4>
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
