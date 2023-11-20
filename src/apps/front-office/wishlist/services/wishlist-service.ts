import endpoint from "shared/endpoint";

/**
 * Get Wishlist Meals
 */
export function getWishlistsList(params: any = {}) {
  return endpoint.get("/wishlist", {
    params,
  });
}

/**
 * Update wishlist
 */
export function toggleWishlist(id: string | number) {
  return endpoint.post("/wishlist", {
    meal: id,
  });
}