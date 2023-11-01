import { trans } from "@mongez/localization";
import CheckoutEmailInput from "../../Form/CheckoutEmailInput";
import CheckoutInputText from "../../Form/CheckoutInputText";
import CheckoutPhoneNumber from "../../Form/CheckoutPhoneInput/CheckoutPhoneInput";

export default function UserDetailsForm() {
  return (
    <div className="xl:w-[60%] w-full">
      <div className="grid sm:grid-flow-col grid-flow-row gap-5">
        <CheckoutInputText
          name="user.firstName"
          label={trans("firstName")}
          required
          autoFocus
        />
        <CheckoutInputText
          name="user.lastName"
          label={trans("lastName")}
          required
        />
      </div>

      <CheckoutInputText label={trans("companyName")} />

      {/* counters lest here */}

      <CheckoutInputText label={trans("streetAddress")} required />
      <CheckoutInputText label={trans("townOrCity")} required />

      {/* <CheckoutInputText label={trans("stateCounty")}  /> should be select input */}

      <CheckoutInputText label={trans("postcodeZIP")} required length={5} />

      <CheckoutPhoneNumber label={trans("phone")} required />

      <CheckoutEmailInput label={trans("emailAddress")} required />
    </div>
  );
}
