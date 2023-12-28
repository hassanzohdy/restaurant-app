import { trans } from "@mongez/localization";
import { addressesAtom } from "apps/front-office/checkout/atom/checkout-atoms";
import { Button } from "apps/front-office/design-system/components/Button";
import { cn } from "apps/front-office/design-system/utils/cn";
import { useEffect, useState } from "react";
import useAddresses from "shared/hooks/useAddresses";
import EditThisAddress from "../EditThisAddress";

export default function BookAddresses() {
  const { selectAddress } = useAddresses();
  const addresses = addressesAtom.useValue();

  const [selectedAddressId, setSelectedAddressId] = useState<number>();
  const [editFormOpen, setEditFormOpen] = useState<{ [key: number]: boolean }>(
    {},
  );

  const defaultSelectedId = addresses.find(address => address.isPrimary)?.id;

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

  return (
    <>
      <h4 className="font-bold text-[1.3em] clear-both border-b mb-2">
        {trans("bookAddresses")}
      </h4>
      <div className="flex flex-col gap-2">
        {addresses.map((address, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col border rounded-md group",
              selectedAddressId === address.id && "bg-border border-gray-400",
            )}>
            <div className="flex flx-row gap-2 group2:focus:ring-1">
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
                <div className="text-sm">
                  <span className="font-bold ">
                    {address.firstName} {address.lastName}
                  </span>{" "}
                  {address.address}
                </div>
                <Button
                  className={cn(
                    "bg-primary-main w-fit py-1 px-2 rounded-xl hover:bg-primary-hover ltr:mr-2 rtl:ml-2 capitalize opacity-0  focus:opacity-100",
                    selectedAddressId === address.id && "opacity-100",
                  )}
                  onClick={() => toggleEditForm(address.id)}>
                  {trans("edit")}
                </Button>
                {/* <Button
                  className={cn(
                    "bg-primary-main w-fit py-1 px-2 rounded-xl hover:bg-primary-hover mr-2 capitalize ml-auto opacity-0 group-hover:opacity-100 focus:opacity-100",
                    editFormOpen[address.id] && "opacity-100",
                  )}
                  onClick={() => handleDeleteAddress(address.id)}>
                  delete
                </Button> */}
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
          onClick={() => selectAddress(selectedAddressId)}>
          {trans("useThisAddress")}
        </Button>
      </div>
    </>
  );
}
