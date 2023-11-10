import endpoint from "shared/endpoint";

/**
 * Get Faqs list
 */
export function getFaqsList(params: any = {}) {
  return endpoint.get("/faq", {
    params,
  });
}

/**
 * Get faq details
 */
export function getFaq(id: string | number) {
  return endpoint.get("/faq/" + id);
}
