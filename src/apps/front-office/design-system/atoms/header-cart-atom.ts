import { atom } from "@mongez/react-atom";

type headerCartAtomType = {
  opened: boolean;
  cartCount: number;
};

export const headerCartAtom = atom<headerCartAtomType>({
  key: "headerCart",
  default: {
    opened: false,
    cartCount: 0,
  },
});
