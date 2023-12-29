import { trans } from "@mongez/localization";

export default function PaymentDetails() {
  return (
    <div>
      <h4 className="font-bold text-[1.5em] clear-both mb-2">
        {trans("paymentOptions")}
      </h4>
      <div className="w-full border rounded-xl p-3">
        <div className="flex flx-row gap-2 bg-border border-gray-400 border rounded-md ">
          <input
            type="radio"
            name="paymentMethod"
            checked={true}
            onChange={() => null}
            className="cursor-pointer ltr:ml-2 rtl:mr-2"
          />
          <label
            htmlFor="paymentMethod"
            className="cursor-pointer w-full h-full py-2 flex flex-row justify-between items-center gap-2">
            {trans("cashOnDelivery")}
          </label>
        </div>
      </div>
    </div>
  );
}
