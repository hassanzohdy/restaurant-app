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
export function addToCart(meal: number, amount = 1) {
  return endpoint.post("/cart", { meal, amount });
}
