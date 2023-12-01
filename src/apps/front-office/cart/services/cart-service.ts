import endpoint from "shared/endpoint";

/**
 * Get cart details
 */
export function getCart() {
  return endpoint.get("/cart");
}

/**
 * Add meal to cart
 */
export function addToCart(meal: number, quantity = 1) {
  return endpoint.post("/cart", { meal, quantity });
}

/**
 * Remove item from cart
 */
export function removeFromCart(item: number) {
  return endpoint.delete("/cart/items/" + item);
}
