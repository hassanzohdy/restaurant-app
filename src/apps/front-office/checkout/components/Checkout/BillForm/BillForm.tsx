import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { useState } from "react";
import UserDetailsForm from "../UserDetailsForm";
import UserOrderDetails from "../UserOrder";

export default function BillForm() {
  const [errorHandel, setErrorHandel] = useState({ label: [], error: [] });

  const onError = formControls => {
    const labels = formControls.map(control => control.props.label);
    const errors = formControls.map(control => control.error);

    console.log(formControls);

    setErrorHandel({ label: labels, error: errors });
  };

  const clearErrors = () => {
    setErrorHandel({ label: [], error: [] });
  };

  return (
    <Form className="gap-2 flex flex-col overflow-hidden" onError={onError}>
      {errorHandelComponent(errorHandel) && (
        <div className="bg-[#e2401c] flex flex-col gap-2 ltr:ml-10 rtl:mr-10 ltr:border-l-8 rtl:border-r-8 mb-3 ltr:border-l-[rgba(0,0,0,.15)] rtl:border-r-[rgba(0,0,0,.15)] w-full px-7 py-5">
          {errorHandelComponent(errorHandel)}
          <p className="text-white text-sm">
            {trans("noShippingMethodSelected")}
          </p>
        </div>
      )}

      <h3 className="font-bold text-[1.6em] clear-both">
        {trans("billingDetails")}
      </h3>

      <div className="flex xl:flex-row flex-col gap-10 w-full">
        <UserDetailsForm />
        <UserOrderDetails clearErrors={clearErrors} />
      </div>
    </Form>
  );
}

const errorHandelComponent = state => {
  if (state.label.length !== 0) {
    return state.label.map((label, index) => (
      <div key={index} className="text-sm">
        <span className="text-white font-bold">
          <span className="rtl:hidden">{trans("billing")}</span> {label}
        </span>{" "}
        <span className="text-white">{state.error[index]}</span>
        {/* Access error by index */}
      </div>
    ));
  }
  return null;
};
