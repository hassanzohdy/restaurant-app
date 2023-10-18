import { atom } from "@mongez/react-atom";

<<<<<<< HEAD
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
=======
type headerCartAtomType= {
    opened: boolean,
    cartCount: number
}

export const headerCartAtom = atom<headerCartAtomType>({
    key: 'headerCart',
    default: {
        opened: false,
        cartCount: 0
    }
});
>>>>>>> 771d18da8db3945a77e32c400e14e2e57b22ffd5
