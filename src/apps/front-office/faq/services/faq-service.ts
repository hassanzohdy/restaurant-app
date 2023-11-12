import endpoint from "shared/endpoint";

/**
 * Get Faqs list
 */
export function getFaqsList(params: any = {}) {
  return endpoint.get("/faq", {
    params,
  });
}