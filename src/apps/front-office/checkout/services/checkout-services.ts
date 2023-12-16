import endpoint from "shared/endpoint";

export function getUserAddresses() {
  return endpoint.get("/address-book");
}

export function getAddressById(id) {
  return endpoint.get("/address-book", { params: id });
}

export function addNewAddress(form) {
  return endpoint.post("/address-book", form);
}

export function deleteAddress(id) {
  return endpoint.delete("/address-book/" + id);
}

export function updateAddressData(id, updatedData) {
  return endpoint.put("/address-book/" + id, updatedData);
}
