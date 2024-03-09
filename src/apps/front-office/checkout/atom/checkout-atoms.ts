import { atom } from "@mongez/react-atom";
import { BookAddressesType } from "../utils/types";

export const defaultAddressAtom = atom({
  key: "defaultAddress",
  default: true,
});

export const addressesAtom = atom<BookAddressesType[]>({
  key: "address-book",
  default: [],
});

export type Checkout = {
  notes: string;
  shippingAddress: number;
  paymentMethod: "cashOnDelivery" | "card";
  useShippingAddressForBilling: boolean;
};

export const checkoutAtom = atom<Checkout>({
  key: "checkout",
  default: {
    notes: "",
    shippingAddress: 0,
    paymentMethod: "cashOnDelivery",
    useShippingAddressForBilling: true,
  },
});
