import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { userAtom } from "apps/front-office/account/atoms/user-atom";
import CheckoutPhoneInput from "apps/front-office/checkout/components/Checkout/Form/CheckoutPhoneInput";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { EmailInputV2 } from "apps/front-office/design-system/components/Form/EmailInput";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import { memo, useState } from "react";
import useAccount from "../../hook/use-account";

function _UpdateProfile() {
  const { updateProfile } = useAccount();
  const { firstName, lastName, phoneNumber, email } = userAtom.useValue();
  const [data, setData] = useState({
    firstName,
    lastName,
    phoneNumber,
    email,
  });

  const upDateData = (input, value) => {
    setData({ ...data, [input]: value || "" });
  };

  return (
    <Form onSubmit={() => updateProfile(data)}>
      <div className="grid md:grid-cols-2 gap-3">
        <TextInputV2
          label={trans("firstName")}
          name="firstName"
          required
          value={data?.firstName}
          onChange={value => upDateData("firstName", value)}
        />
        <TextInputV2
          label={trans("lastName")}
          name="lastName"
          required
          value={data?.lastName}
          onChange={value => upDateData("lastName", value)}
        />
        <EmailInputV2
          label={trans("email")}
          name="email"
          required
          value={data?.email}
          onChange={value => upDateData("email", value)}
        />
        <CheckoutPhoneInput
          label={trans("phoneNumber")}
          name="phoneNumber"
          value={data?.phoneNumber}
          onChange={value => upDateData("phoneNumber", value)}
        />
      </div>
      <div className="w-full md:w-1/5 mx-auto mt-5">
        <SubmitButton>{trans("updateProfile")}</SubmitButton>
      </div>
    </Form>
  );
}

const UpdateProfile = memo(_UpdateProfile);
export default UpdateProfile;
