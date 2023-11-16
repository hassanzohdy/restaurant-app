import endpoint from "shared/endpoint";

/**
 * Get Wishlists list
 */
export function getWishlistsList(params: any = {}) {
  return endpoint.get("/wishlist", {
    params,
  });
}

/**
 * Get wishlist details
 */
export function toggleWishlist(id: string | number) {
  return endpoint.post("/wishlist", {
    meal: id,
  });
}
