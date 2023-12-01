import { trans } from "@mongez/localization";
import { showToastMessage } from "apps/front-office/account/hooks/useToastMessage";
import { addToCart } from "apps/front-office/cart/services/cart-service";
import { Button } from "apps/front-office/design-system/components/Button";
import MealWishlist from "apps/front-office/menu/components/MealWishlist";
import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";
import { useState } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa6";

export default function AddMealToCart() {
  const [amount, setAmount] = useState(1);
  const meal = mealAtom.useValue();
  const [isLoading, setIsLoading] = useState(false);
  const [maxAmountPerOrder, setMaxAmountPerOrder] = useState(
    meal.maxAmountPerOrder,
  );

  const incrementAmount = () => {
    if (maxAmountPerOrder && amount >= maxAmountPerOrder) return;

    setAmount(amount + 1);
  };

  const decrementAmount = () => {
    const newAmount = amount === 1 ? 1 : amount - 1;
    setAmount(newAmount);
  };

  const addMealToCart = () => {
    setIsLoading(true);
    addToCart(meal.id, amount)
      .then(() => {
        // TODO: show a toast message
        showToastMessage({
          message: trans("addedToCart"),
          type: "success",
        });
      })
      .catch(error => {
        // TODO: show a toast message
        showToastMessage({
          message: trans("somethingWentWrong"),
          type: "error",
        });

        if (error.response?.data.maxAmountPerOrder) {
          setAmount(error.response.data.maxAmountPerOrder);
          setMaxAmountPerOrder(error.response.data.maxAmountPerOrder);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="flex items-center gap-10 text-sm font-semibold pb-6 border-b flex-wrap">
        <div className="flex gap-3 items-center font-bold">
          <button
            className="w-8 h-8 bg-primary-light hover:bg-primary-light hover:text-primary-main p-1 rounded-full"
            onClick={decrementAmount}>
            -
          </button>
          <span>{amount}</span>
          <button
            className="w-8 h-8 bg-primary-light hover:bg-primary-light hover:text-primary-main p-1 rounded-full"
            onClick={incrementAmount}>
            +
          </button>
        </div>
        <div className="flex gap-2 min-w-fit flex-1 shrink-0">
          <Button
            variant="primary"
            className="uppercase rounded-lg flex-1 py-4 px-6 gap-2 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            onClick={addMealToCart}>
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin" />
                {trans("loading")}
              </>
            ) : (
              <>
                <BsFillBasket2Fill className="shrink-0" />
                {trans("addToCart")}
              </>
            )}
          </Button>
          <MealWishlist meal={meal} />
        </div>
      </div>
    </>
  );
}
