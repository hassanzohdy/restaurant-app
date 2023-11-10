import { trans } from "@mongez/localization";
import OrderMenuItem from "../OrderMenuItem";

export type OrderMenuProps = {
  orderMenu: {
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
};

export default function OrderMenu({ orderMenu }: OrderMenuProps) {
  return (
    <div className="order-meals pb-6 mb-4 border-b-2 border-dashed border-[#eee]">
      <h4 className="order-menu text-[20px] mb-4 font-bold max-md:text-[18px] max-sm:text-[16px]">
        {trans("orderMenu")}
      </h4>
      <ul>
        {orderMenu.map((meal, index) => (
          <OrderMenuItem key={index} meal={meal} />
        ))}
      </ul>
    </div>
  );
}
