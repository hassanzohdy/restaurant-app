import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import { cn } from "apps/front-office/design-system/utils/cn";
import { useRef } from "react";
import useAddresses from "shared/hooks/use-addresses";
import useFocusOnToggle from "shared/hooks/useFocusOnToggle";
import CheckoutPhoneNumber from "../Form/CheckoutPhoneInput";

type PostNewAddressType = {
  newAddress?: boolean;
  setNewAddress: (value: boolean) => void;
};

export default function AddressFrom({
  newAddress,
  setNewAddress,
}: PostNewAddressType) {
  const { postNewAddress } = useAddresses();

  const firstNameRef = useRef(null);

  useFocusOnToggle(firstNameRef.current, newAddress);

  const handelPostNewAddress = form => {
    setNewAddress(false);
    postNewAddress({ ...form, isPrimary: true });
  };

  return (
    <Form
      onSubmit={e => handelPostNewAddress(e.values)}
      className={cn(
        "grid grid-rows-[0fr] transition-all duration-500",
        newAddress && "grid-rows-[1fr]",
      )}>
      <div className="overflow-hidden">
        <div className="grid sm:grid-flow-col grid-flow-row gap-5">
          <TextInputV2
            ref={firstNameRef}
            name="firstName"
            label={trans("firstName")}
            required
            autoFocus
          />
          <TextInputV2 name="lastName" label={trans("lastName")} required />
        </div>
        <TextInputV2
          name="address"
          label={trans("streetAddress")}
          placeholder={trans("houseNumberStreetName")}
          className="placeholder:text-sm"
          required
        />

        <CheckoutPhoneNumber
          name="phoneNumber"
          label={trans("phone")}
          required
        />
        <div className="flex">
          <SubmitButton className="bg-primary-main text-[0.9em] transition-colors font-bold py-1 px-3 mb-3 rounded-xl hover:bg-primary-hover w-fit capitalize ltr:ml-auto rtl:mr-auto mt-4">
            {trans("useThisAddress")}
          </SubmitButton>
        </div>
      </div>
    </Form>
  );
}
