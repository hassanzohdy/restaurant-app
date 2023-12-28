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
 * Update cart quantity
 */
export function updateCart(item: number, quantity: number) {
  return endpoint.put("/cart/items/" + item, { quantity });
}

/**
 * Remove item from cart
 */
export function removeFromCart(item: number) {
  return endpoint.delete("/cart/items/" + item);
}
