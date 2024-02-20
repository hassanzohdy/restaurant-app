import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { userAtom } from "apps/front-office/account/atoms/user-atom";
import {
  addressesAtom,
  defaultAddressAtom,
} from "apps/front-office/checkout/atom/checkout-atoms";
import { BookAddressesType } from "apps/front-office/checkout/utils/types";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import { cn } from "apps/front-office/design-system/utils/cn";
import { useEffect, useState } from "react";
import useAddresses from "shared/hooks/use-addresses";
import { toastWarning } from "shared/hooks/useToastMessage";
import CheckoutPhoneNumber from "../Form/CheckoutPhoneInput";

export default function EditAddress({ id }: any) {
  const [formData, setFormData] = useState<BookAddressesType>();
  const [selectedAddress, setSelectedAddress] = useState<
    BookAddressesType | undefined
  >();
  const { updateAddressData } = useAddresses();

  const addresses = addressesAtom.useValue();
  const userEmail = userAtom.useValue().email;

  useEffect(() => {
    setSelectedAddress(addresses.find(address => address.id === id));
    setFormData(addresses.find(address => address.id === id));
  }, [addresses, id]);

  const handleInputChange = (name: string, value: string | undefined) => {
    setFormData(
      prevData =>
        ({
          ...prevData,
          [name]: value || "",
        }) as BookAddressesType,
    );
  };

  const handleSubmit = ({ values }) => {
    const { firstName, lastName, address, phoneNumber, isPrimary } =
      selectedAddress || {};
    if (
      firstName === formData?.firstName &&
      lastName === formData?.lastName &&
      address === formData?.address &&
      phoneNumber === formData?.phoneNumber &&
      isPrimary
    ) {
      toastWarning(trans("addressSelectedButNotEdited"));
      return defaultAddressAtom.update(true);
    }
    const updatedData = {
      ...values,
      email: userEmail,
      id: selectedAddress?.id, // cuz response dons't have the updated form to update the atom with
    };
    updateAddressData(id, updatedData, trans("addressHasUpdated"));
  };

  if (!formData) return null;

  return (
    <div className={cn("transition-all h-full py-1 px-3")}>
      <h4 className="text-[1em] mt-4 clear-both cursor-pointer">
        <div className="cursor-pointer w-full font-bold">
          {trans("editThisAddress")}
        </div>
      </h4>
      <Form onSubmit={e => handleSubmit(e)}>
        <div className="grid sm:grid-flow-col grid-flow-row gap-5">
          <TextInputV2
            name="firstName"
            label={trans("firstName")}
            value={formData.firstName}
            onChange={value => handleInputChange("firstName", value)}
            required
            autoFocus
          />
          <TextInputV2
            name="lastName"
            label={trans("lastName")}
            value={formData.lastName}
            onChange={value => handleInputChange("lastName", value)}
            required
          />
        </div>
        <TextInputV2
          name="address"
          label={trans("streetAddress")}
          placeholder={trans("houseNumberStreetName")}
          value={formData.address}
          onChange={value => handleInputChange("address", value)}
          required
        />

        <CheckoutPhoneNumber
          name="phoneNumber"
          label={trans("phone")}
          value={formData.phoneNumber}
          onChange={value => handleInputChange("phoneNumber", value)}
          required
        />
        <div className="w-full flex items-end mt-4">
          <SubmitButton className="bg-primary-main text-[0.85em] font-bold py-1 px-3 mb-3 rounded-xl hover:bg-primary-hover w-fit capitalize ltr:ml-auto rtl:mr-auto">
            {trans("save")}
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
}
