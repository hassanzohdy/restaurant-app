import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { Link } from "@mongez/react-router";
import Loader, {
  Error,
} from "apps/front-office/design-system/components/Indicators/Indicators";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { IoClose, IoCloseSharp } from "react-icons/io5";
import { useToggleState } from "../../../../Hooks/headerStateHook";
import useEscapeToClose from "../../../../Hooks/useEscapeToClose";
import { cartLengthAtom } from "../../../../atoms/header-atoms";

export default function CartProducts() {
  const { groupState, toggleState } = useToggleState();
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState<any>(null);

  useEscapeToClose(groupState.cartIcon, () => toggleState("cartIcon"));

  useOnce(() => {
    getMeals()
      .then(response => {
        setMeals(response.data.meals);
        cartLengthAtom.update(response.data.meals.length);
      })
      .catch(error => {
        setError(
          error.response?.data?.error ||
            error.message ||
            trans("somethingWentWrong"),
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row justify-between py-5 px-[15px] border-b">
        <h1 className="text-xl font-bold uppercase">{trans("shoppingCart")}</h1>
        <button
          onClick={() => toggleState("cartIcon")}
          className="flex flex-row items-center cursor-pointer text-bodyTextColor text-sm font-semibold">
          {trans("close")} <IoCloseSharp />
        </button>
      </div>
      {meals.length === 0 ? (
        <p className="text-lg text-center m-6 text-headingTextColor">
          {trans("noProductsInCart")}
        </p>
      ) : (
        <>
          <div className="flex flex-col h-full overflow-auto px-5">
            {meals.map(meal => (
              <div
                key={meal.id}
                className="flex flex-row py-3 border-b border-border gap-2">
                <button className="self-center border-gray-400 rounded-full border w-4 h-4 flex items-center justify-center text-gray-400">
                  <IoClose />
                </button>
                <div className=" bg-border rounded-[44%] w-[64px]">
                  <img src={meal.image.url} alt={meal.name} />
                </div>
                <div className="flex flex-col">
                  <Link
                    className="font-thin text-[15px] hover:text-primary-hover"
                    to={`/${URLS.menu.list}/${meal.id}/${meal.slug}`}>
                    {meal.name}
                  </Link>
                  <span className="text-sm text-primary-main">
                    {price(meal.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 py-5 flex flex-col gap-2 border-t">
            <div className="flex flex-row justify-between items-center w-full">
              <h4 className="font-bold text-base">{trans("subtotal")} :</h4>
              <span className="font-bold text-xl">
                {price(meals.reduce((total, meal) => total + meal.price, 0))}
              </span>
            </div>
            <Link
              to={`${URLS.checkout.page}`}
              className="bg-primary-main text-sm rounded-md py-4 text-black uppercase flex justify-around font-bold">
              {trans("checkout")}
            </Link>
            <Link
              to={`${URLS.cart}`}
              className="rounded-md py-4 border border-black text-black uppercase flex justify-around font-bold text-sm">
              {trans("viewCart")}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
