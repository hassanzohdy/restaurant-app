import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";

export type OrderMenuItemProps = {
  meal: {
    name: string;
    image: string;
    price: number;
    quantity: number;
  };
};
export default function OrderMenuItem({ meal }: OrderMenuItemProps) {
  return (
    <li className="orders-list-item p-6 mb-5 last:mb-0 rounded-lg bg-[#f8f5f0] border border-[#eee] max-md:py-5 max-md:px-4">
      <div className="flex">
        <Link
          to={URLS.menu.viewMeal(meal)}
          className="image flex flex-custom align-middle justify-center w-[80px] h-[75px] rounded-md bg-[#ddd] p-2 mr-3">
          <img src={meal.image} alt="" className="max-w-full" />
        </Link>
        <div className="flex justify-between w-full max-sm:flex-col max-sm:justify-start">
          <div>
            <h3 className="name text-[20px] capitalize font-semibold max-sm:text-[14px] max-sm:leading-relaxed">
              <Link to={URLS.menu.viewMeal(meal)}>{meal.name}</Link>
            </h3>
            <span className="order-date text-[15px] text-primary-text capitalize font-semibold max-sm:text-[12px]">
              {meal.price} x {meal.quantity}
            </span>
          </div>
          <p className="total-price text-[18px] font-bold max-sm:text-[14px]">
            <span className="text-[16px] text-primary-text text-semibold max-sm:text-[14px]">
              {trans("total")} :
            </span>{" "}
            ${meal.price * meal.quantity}
          </p>
        </div>
      </div>
    </li>
  );
}
