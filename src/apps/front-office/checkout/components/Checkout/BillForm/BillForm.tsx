import { trans } from "@mongez/localization";
import { Form } from "src/form";
import UserDetailsForm from "../UserDetailsForm";
import UserOrderDetails from "../UserOrder";

export default function BillForm() {
  const submitForm = e => {
    console.log(e);
  };
  return (
    <Form
      className="gap-2 flex flex-col overflow-hidden"
      onSubmit={submitForm}
      ignoreEmptyValues>
      <h3 className="font-bold text-[1.6em] clear-both">
        {trans("billingDetails")}
      </h3>

      <div className="flex xl:flex-row flex-col gap-10 w-full">
        <UserDetailsForm />
        <UserOrderDetails />
      </div>
    </Form>
  );
}
