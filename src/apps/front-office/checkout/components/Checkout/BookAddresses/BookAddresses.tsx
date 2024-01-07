import { trans } from "@mongez/localization";
import {
  addressesAtom,
  checkoutAtom,
  defaultAddressAtom,
} from "apps/front-office/checkout/atom/checkout-atoms";
import { Button } from "apps/front-office/design-system/components/Button";
import { cn } from "apps/front-office/design-system/utils/cn";
import { useEffect, useState } from "react";
import useAddresses from "shared/hooks/use-addresses";
import EditThisAddress from "../EditThisAddress";

export default function BookAddresses() {
  const { updateAddressData } = useAddresses();
  const addresses = addressesAtom.useValue();

  const [selectedAddressId, changeAddress] = useState<number>();
  const [editFormOpen, setEditFormOpen] = useState<{ [key: number]: boolean }>(
    {},
  );

  const defaultSelectedId = addresses.find(address => address.isPrimary)?.id;

  const setSelectedAddressId = (id: number | undefined) => {
    changeAddress(id);
    checkoutAtom.change("shippingAddress", id);
  };

  useEffect(() => {
    setSelectedAddressId(defaultSelectedId);
  }, [addresses]);

  const handleRadioChange = (id: number) => {
    setSelectedAddressId(id);
  };

  const toggleEditForm = (id: number) => {
    setEditFormOpen(prevEditFormOpen => ({
      ...Object.fromEntries(
        Object.entries(prevEditFormOpen).map(([key]) => [key, false]),
      ),
      [id]: !prevEditFormOpen[id],
    }));
  };

  const handelSelectedAddress = id => {
    const selectedAddress = addresses.find(address => address.id === id);

    if (selectedAddress?.isPrimary) {
      defaultAddressAtom.update(true);
      return;
    }

    updateAddressData(
      id,
      { ...selectedAddress, isPrimary: true },
      trans("addressHasSelected"),
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {addresses.map((address, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col border rounded-md group focus:ring-1 focus:ring-primary-main",
            selectedAddressId === address.id && "bg-border border-gray-400",
          )}>
          <div className="flex flx-row gap-2">
            <input
              type="radio"
              name="addresses"
              id={`${address.id}`}
              checked={selectedAddressId === address.id}
              onChange={() => handleRadioChange(address.id)}
              className="cursor-pointer ltr:ml-2 rtl:mr-2"
            />
            <label
              htmlFor={`${address.id}`}
              className="cursor-pointer w-full h-full py-2 flex flex-row justify-between items-center gap-2">
              <div className={"text-sm"}>
                <span className="font-bold">
                  {address.firstName} {address.lastName}
                </span>{" "}
                {address.address}
              </div>
              <Button
                className={cn(
                  "bg-primary-main w-fit py-1 px-2 rounded-xl invisible hover:bg-primary-hover ltr:mr-2 rtl:ml-2 capitalize opacity-0  focus:opacity-100",
                  selectedAddressId === address.id && "opacity-100 visible",
                )}
                onClick={() => toggleEditForm(address.id)}>
                {trans("edit")}
              </Button>
            </label>
          </div>

          <div
            className={cn(
              "grid grid-rows-[0fr] transition-all duration-500 invisible",
              editFormOpen[address.id] && "grid-rows-[1fr] visible",
            )}>
            <div className="overflow-hidden">
              <EditThisAddress id={address.id} />
            </div>
          </div>
        </div>
      ))}

      <Button
        className="bg-primary-main ltr:ml-auto rtl:mr-auto w-fit py-1 px-2 rounded-xl hover:bg-primary-hover mt-3"
        onClick={() => handelSelectedAddress(selectedAddressId)}>
        {trans("useThisAddress")}
      </Button>
    </div>
  );
}
