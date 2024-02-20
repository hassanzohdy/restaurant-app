import { trans } from "@mongez/localization";
import { useState } from "react";
import AddressFrom from "../AddressForm";

export default function AddNewAddressesForm() {
  const [newAddress, setNewAddress] = useState(false);

  return (
    <div>
      <h4 className="text-[1em] mt-4 clear-both cursor-pointer">
        <input
          type="checkbox"
          name="newAddress"
          id="newAddress"
          checked={newAddress}
          onChange={() => setNewAddress(prev => !prev)}
        />
        <label
          htmlFor="newAddress"
          className="ltr:ml-2 rtl:mr-2 cursor-pointer w-full">
          {trans("addNewAddress")}
        </label>
      </h4>
      <AddressFrom newAddress={newAddress} setNewAddress={setNewAddress} />
    </div>
  );
}
