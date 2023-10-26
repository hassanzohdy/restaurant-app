import endpoint from "shared/endpoint";

export function getMeal(id: string | number) {
  return endpoint.get(`/meals/${id}`);
}
