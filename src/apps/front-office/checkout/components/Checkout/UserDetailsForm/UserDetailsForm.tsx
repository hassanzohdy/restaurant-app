import { trans } from "@mongez/localization";
import { IoIosArrowDown } from "react-icons/io";
import TextInputV2 from "../../../../design-system/components/Form/TextInputV2";
import CheckOutSelect from "../../Form/CheckOutSelect";
import CheckoutEmailInput from "../../Form/CheckoutEmailInput";
import CheckoutPhoneNumber from "../../Form/CheckoutPhoneInput/CheckoutPhoneInput";
import { options } from "./country-options";

export default function UserDetailsForm() {
  return (
    <div className="xl:w-[60%] w-full flex flex-col gap-3">
      <div className="grid sm:grid-flow-col grid-flow-row gap-5">
        <TextInputV2
          name="firstName"
          label={trans("firstName")}
          required
          autoFocus
        />
        <TextInputV2 name="lastName" label={trans("lastName")} required />
      </div>

      <TextInputV2 name="companyName" label={trans("companyName")} />

      <div className="relative">
        <CheckOutSelect
          name="country"
          data={options}
          label="country"
          className="group"
          defaultValue={options[0]}
        />

        <IoIosArrowDown className="absolute rtl:left-3 ltr:right-3 top-[60%]" />
      </div>

      <TextInputV2
        name="streetAddress"
        label={trans("streetAddress")}
        placeholder={trans("houseNumberStreetName")}
        className="placeholder:text-sm"
        required
      />

      <TextInputV2 name="townOrCity" label={trans("townOrCity")} required />

      <TextInputV2
        name="postcodeZIP"
        label={trans("postcodeZIP")}
        required
        length={5}
      />

      <CheckoutPhoneNumber name="phoneNumber" label={trans("phone")} required />

      <CheckoutEmailInput
        name="emailAddress"
        label={trans("emailAddress")}
        required
      />

      <div>
        <label htmlFor="textArea">{trans("orderNotes")}</label>
        <textarea
          name="textArea"
          id="textArea"
          className="mt-1 block w-full px-3 py-3 bg-white border border-border rounded-md text-base placeholder-slate-400 focus:outline-none focus:border-primary-main"
          placeholder={trans("notesAboutOrder")}
        />
      </div>
    </div>
  );
}
