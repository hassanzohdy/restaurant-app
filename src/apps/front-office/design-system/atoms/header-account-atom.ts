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
