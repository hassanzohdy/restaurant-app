import { trans } from "@mongez/localization";

export default function UserOrderDetailsTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="flex justify-between text-[#1E1D23] py-4 border-b">
          <th className="text-sm">{trans("product")}</th>
          <th className="text-sm">{trans("subtotal")}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="flex justify-between text-[#1E1D23] py-4 border-b">
          <th className="text-sm text-black font-thin">Blueberry Shake × 1</th>
          <th className="text-sm">£10.68</th>
        </tr>
      </tbody>
      <tfoot>
        <tr className="flex justify-between text-[#1E1D23] py-4 border-b">
          <th className="text-sm">{trans("subtotal")}</th>
          <th className="text-sm">£10.68</th>
        </tr>
        <tr className="grid grid-cols-2 text-[#1E1D23] py-4 border-b">
          <th className="text-sm rtl:text-right ltr:text-left">
            {trans("shipping")}
          </th>
          <th className="text-sm rtl:text-left ltr:text-right font-thin text-black">
            {trans("noShippingOptions")}
          </th>
        </tr>
        <tr className="flex flex-row justify-between items-center text-[#1E1D23] py-4">
          <th className="text-sm rtl:text-right ltr:text-left">
            {trans("total")}
          </th>
          <th className="text-2xl rtl:text-left ltr:text-right font-bold text-primary-main">
            £10.68
          </th>
        </tr>
      </tfoot>
    </table>
  );
}
