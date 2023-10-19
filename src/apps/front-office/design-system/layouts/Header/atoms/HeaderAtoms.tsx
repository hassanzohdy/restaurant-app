import { Atom, atom } from "@mongez/react-atom";

export const scrollAtom: Atom = atom<number>({
  key: "scroll",
  default: 0,
});

export const ToggleAtom: Atom = atom({
  key: "Toggle",
  default: {
    headerSearch: false,
    langSwitch: false,
    userIcon: false,
    cartIcon: false,
    burgerIcon: false,
  },
});
