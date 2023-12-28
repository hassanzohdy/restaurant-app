import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import useAddresses from "shared/hooks/useAddresses";
import CheckoutPhoneNumber from "../Form/CheckoutPhoneInput";

export default function AddAddressBookForm() {
  const { postNewAddress } = useAddresses();

  return (
    <div>
      <h4 className="text-[1.2em] font-bold clear-both cursor-pointer">
        {trans("addNewAddress")}
      </h4>
      <Form onSubmit={e => postNewAddress(e.values)}>
        <div className="overflow-hidden">
          <div className="grid sm:grid-flow-col grid-flow-row gap-5">
            <TextInputV2
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
    </div>
  );
}
