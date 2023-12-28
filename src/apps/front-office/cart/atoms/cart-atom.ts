import { atom } from "@mongez/react-atom";
import { Cart } from "apps/front-office/cart/utils/types";

export const cartAtom = atom<Cart>({
  key: "cart",
  default: {},
});
