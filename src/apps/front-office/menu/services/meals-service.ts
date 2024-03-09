import endpoint from "shared/endpoint";

export function getMeal(id: number | string) {
  return endpoint.get("/meals/" + id);
}

export function getMeals(params: any = {}) {
  return endpoint.get("/meals", {
    params,
  });
}

export function getMealPosition(id: number, position: "next" | "prev") {
  return endpoint.get("/meals/" + id + "/" + position);
}

export function getSearchMeals(searchInput) {
  return getMeals({
    name: searchInput,
  });
}

export function updateMeal(id, values) {
  return endpoint.post("/meals/" + id, { values });
}

export function getReviews(id) {
  return endpoint.get("/reviews/" + id);
}

export function addReview(values) {
  return endpoint.post("/reviews", values);
}

export function deleteReview(id) {
  return endpoint.delete("/reviews/" + id);
}

export function updateReview(id, values) {
  return endpoint.put("/reviews/" + id, values);
}
