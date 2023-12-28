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
