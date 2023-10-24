import { Atom, atom, openAtom } from "@mongez/react-atom";

export const scrollAtom: Atom = atom<number>({
  key: "scroll",
  default: 0,
});

export const burgerAtom = openAtom("openAtom");

export const ToggleGroupAtom: Atom = atom({
  key: "Toggle",
  default: {
    headerSearch: false,
    langSwitch: false,
    userIcon: false,
    cartIcon: false,
  },
});
