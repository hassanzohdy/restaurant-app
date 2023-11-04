import { trans } from "@mongez/localization";
import { avatar } from "shared/assets";

export type OrderTopDetailsProps = {
  orderNumber: string;
  orderDate: string;
};

export default function OrderTopDetails({
  orderNumber,
  orderDate,
}: OrderTopDetailsProps) {
  return (
    <>
      <div className="top-details flex items-center justify-between pb-4 mb-4 border-b-2 border-dashed border-[#eee]">
        <div>
          <h3 className="text-[32px] font-bold capitalize mb-1 max-lg:text-[28px] max-md:text-[24px] max-sm:text-[22px]">
            {trans("order")} #{orderNumber}
          </h3>
          <span className="date">{orderDate}</span>
        </div>
        <div className="customer flex max-sm:hidden items-center">
          <span className="avatar flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#eee] p-1 m-0 mr-2">
            <img className="m-0" src={avatar} alt="" />
          </span>
          <div>
            <h4 className="text-[14px] font-semibold leading-none">
              Lorem Ipsum
            </h4>
            <span className="text-[12px]">User since 2020</span>
          </div>
        </div>
      </div>
    </>
  );
}
