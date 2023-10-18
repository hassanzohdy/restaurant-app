<<<<<<< HEAD
import { atom } from "@mongez/react-atom";

export type headerAccountAtom = {
  opened: false;
};

export const headerAccountAtom = atom<headerAccountAtom>({
  key: "headerAccount",
  default: {
    opened: false,
  },
});
=======
import { atom, openAtom } from "@mongez/react-atom";

export type headerAccountAtom = {
    opened: false
}

export const headerAccountAtom = atom<headerAccountAtom>({
    key: 'headerAccount',
    default: {
        opened: false
    }
});
>>>>>>> 771d18da8db3945a77e32c400e14e2e57b22ffd5
