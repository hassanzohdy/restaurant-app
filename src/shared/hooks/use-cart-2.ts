import { useOnce } from "@mongez/react-hooks";
import { debounce } from "@mongez/reinforcements";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateCart,
} from "apps/front-office/cart/services/cart-service";
import { useState } from "react";

function _addToCart(mealId: number, quantity = 1) {
  addToCart(mealId, quantity)
    .then(() => {
      // TODO: show success message
    })
    .catch(_error => {
      // TODO: show error message
    });
}

function _updateCartItem(mealId: number, quantity: number) {
  updateCart(mealId, quantity)
    .then(() => {
      // TODO: show success message
    })
    .catch(_error => {
      // TODO: show error message
    });
}

function _removeItemFromCart(mealId: number) {
  removeFromCart(mealId)
    .then(() => {
      // TODO: show success message
    })
    .catch(_error => {
      // TODO: show error message
    });
}

export function useCart2() {
  return {
    addToCart: _addToCart,
    removeItemFromCart: _removeItemFromCart,
    updateCartItem: debounce(_updateCartItem, 500),
    // flushCart,
    useCartLoader,
  };
}

export function useCartLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useOnce(() => {
    getCart()
      .then(() => {
        setIsLoading(false);
      })
      .catch(_error => {
        // TODO: handle error
      });
  });

  return {
    isLoading,
  };
}
