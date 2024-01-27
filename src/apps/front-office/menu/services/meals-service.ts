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
