import endpoint from "shared/endpoint";

/**
 * Get Orders list
 */
export function getOrdersList(params: any = {}) {
  return endpoint.get("/orders", {
    params,
  });
}

/**
 * Get orders details
 */
export function getOrder(id: string | number) {
  return endpoint.get("/orders/" + id);
}
