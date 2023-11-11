import endpoint from "shared/endpoint";

/**
 * Get WishLists list
 */
export function getWishListsList(params: any = {}) {
  return endpoint.get("/wish-list", {
    params,
  });
}

/**
 * Get wish-list details
 */
export function getWishList(id: string | number) {
  return endpoint.get("/wish-list/" + id);
}
