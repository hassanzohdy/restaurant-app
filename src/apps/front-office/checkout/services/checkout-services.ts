import { GenericObject } from "@mongez/reinforcements";
import endpoint from "shared/endpoint";

export function getUserAddresses() {
  return endpoint.get("/address-book");
}

export function getAddressById(id: number) {
  return endpoint.get("/address-book", { params: id });
}

export function addNewAddress(form: GenericObject) {
  return endpoint.post("/address-book", form);
}

export function deleteAddress(id: number) {
  return endpoint.delete("/address-book/" + id);
}

export function updateAddressData(id: number, updatedData: GenericObject) {
  return endpoint.put("/address-book/" + id, updatedData);
}

export function applyCoupon(code: string) {
  return endpoint.patch("/checkout/apply-coupon", { code });
}

export function removeCoupon() {
  return endpoint.delete("/checkout/remove-coupon");
}

export function finishCheckout(data: GenericObject) {
  return endpoint.post("/checkout", data);
}
