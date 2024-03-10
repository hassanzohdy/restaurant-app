import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { type Order } from "../../OrdersPage/components/OrdersListItem/OrdersListItem";

export type OrderMealsListProps = {
  // props go here
  order: Order;
};
export default function OrderMealsList({ order }: OrderMealsListProps) {
  return (
    <>
      <div className="cart-products-table max-lg:mb-8 max-sm:mb-5">
        <table className="table-auto w-full bg-white text-left text-[15px] font-bold capitalize max-md:text-[12px]">
          <thead className="max-sm:hidden">
            <tr className="bg-white border-b uppercase text-[12px]">
              <th scope="col" className="product-name px-3 pb-5 text-[12px]">
                {trans("product")}
              </th>
              <th scope="col" className="product-price px-3 pb-5">
                {trans("price")}
              </th>
              <th scope="col" className="product-quantity px-3 pb-5">
                {trans("quantity")}
              </th>
              <th scope="col" className="product-subtotal px-3 pb-5">
                {trans("subTotal")}
              </th>
            </tr>
          </thead>
          <tbody>
            {order.items.map(item => (
              <tr
                key={item.id}
                className="border-b max-sm:block md:pl-[100px] max-sm:relative">
                <td className="product-name w-[30%]  px-3 py-5 max-sm:block max-sm:w-full max-sm:pl-0 max-sm:px-2 max-sm:pr-5 max-sm:border-b">
                  <Link
                    to={URLS.menu.viewMeal(item.meal)}
                    className="flex items-center gap-2 hover:text-primary-hover duration-700 transition-all ease-in-out flex-col md:flex-row text-2xl md:text-base">
                    <img
                      className="md:max-w-[90px] max-w-[150px]"
                      src={item.meal.image.url}
                      alt={item.meal.name}
                    />
                    {item.meal.name}
                  </Link>
                </td>
                <td className="product-price w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
                  <span className="text-primary-main flex justify-between w-full">
                    {price(item.price)}{" "}
                    <p className="text-primary-text md:hidden">
                      {trans("price")}
                    </p>
                  </span>
                </td>
                <td className="product-quantity w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
                  <div className="quantity flex items-center gap-2 w-full">
                    <span className="flex justify-between w-full">
                      <p className="px-3 text-primary-main">{item.quantity}</p>
                      <p className="text-primary-text md:hidden">
                        {trans("quantity")}
                      </p>
                    </span>
                  </div>
                </td>
                <td className="product-subtotal w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3">
                  <span className="text-primary-main flex justify-between w-full">
                    {price(item.total.price)}
                    <p className="text-primary-text md:hidden">
                      {trans("subTotal")}
                    </p>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
