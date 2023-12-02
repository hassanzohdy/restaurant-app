import { trans } from "@mongez/localization";
import {
  showToastMessage,
  toastError,
} from "apps/front-office/account/hooks/useToastMessage";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "apps/front-office/cart/services/cart-service";
import { useHeaderState } from "apps/front-office/design-system/layouts/Header/Hooks/headerStateHook";
import { State } from "apps/front-office/design-system/layouts/Header/components/HeaderIcons/HeaderCart/CartProducts/CartProducts";
import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";
import { useEffect, useState } from "react";

export default function useCart() {
  const meal = mealAtom.useValue();
  const opened = useHeaderState("cartIcon");

  const [state, setState] = useState<State>("initial");
  const [error, setError] = useState<any>(null);

  const [isAddingToCart, setIsLoading] = useState(false);
  const [maxAmountPerOrder, setMaxAmountPerOrder] = useState(
    meal.maxAmountPerOrder,
  );

  const addMealToCart = (id: number, amount: number) => {
    setIsLoading(true);

    addToCart(id, amount)
      .then(() => {
        showToastMessage({
          message: trans("addedToCart"),
          type: "success",
        });
      })
      .catch(error => {
        toastError(trans("somethingWentWrong"));

        if (error.response?.data.maxAmountPerOrder) {
          setMaxAmountPerOrder(error.response.data.maxAmountPerOrder);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const removeItemFromCart = (id: number) => {
    removeFromCart(id).catch(response => {
      toastError(response.data.error);
    });
  };

  useEffect(() => {
    if (state !== "initial" || !opened) return;

    setState("loading");

    getCart()
      .then(() => {
        // @SEE: shared/endpoint success event
        setState("loaded");
      })
      .catch(error => {
        setState("failed");
        setError(
          error.response?.data?.error ||
            error.message ||
            trans("somethingWentWrong"),
        );
      });
  }, [opened, state]);

  return {
    addMealToCart,
    removeItemFromCart,
    isAddingToCart,
    maxAmountPerOrder,
    error,
    state,
  };
}
