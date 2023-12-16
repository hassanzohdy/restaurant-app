import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import {
  showToastMessage,
  toastError,
} from "apps/front-office/account/hooks/useToastMessage";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "apps/front-office/cart/services/cart-service";
import { useHeaderState } from "apps/front-office/design-system/hooks/headerStateHook";
import { State } from "apps/front-office/design-system/layouts/Header/components/HeaderIcons/HeaderCart/CartProducts/CartProducts";
import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";
import URLS from "apps/front-office/utils/urls";
import { useEffect, useState } from "react";
import useGetBaseRoute from "./useGetBaseRoute";

export default function useCart() {
  const meal = mealAtom.useValue();
  const opened = useHeaderState("cartIcon");

  const [state, setState] = useState<State>("initial");
  const [error, setError] = useState<any>(null);

  const [isAddingToCart, setIsLoading] = useState(false);
  const [maxAmountPerOrder, setMaxAmountPerOrder] = useState(
    meal.maxAmountPerOrder,
  );
  // basePath(root route) is need for fetching the data on checkout page if this page is reloaded
  const basePath = useGetBaseRoute(current("route"));

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

  const onCheckoutPage = basePath === URLS.checkout.page;
  useEffect(() => {
    if (state !== "initial" || (!onCheckoutPage && !opened)) return;

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

function addMealCart(id: number, amount: number) {
  addToCart(id, amount)
    .then(() => {
      showToastMessage({
        message: trans("addedToCart"),
        type: "success",
      });
    })
    .catch(error => {
      if (error.response?.data.maxAmountPerOrder) {
        toastError(error.response.data.maxAmountPerOrder);
      } else {
        toastError(trans("somethingWentWrong"));
      }
    });
}

export function useCart2() {
  return {
    addToCart: addMealCart,
  };
}
