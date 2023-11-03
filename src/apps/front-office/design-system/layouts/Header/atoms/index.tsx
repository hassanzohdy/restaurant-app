import { Atom, atom } from "@mongez/react-atom";

export const scrollAtom: Atom = atom<number>({
  key: "scroll",
  default: 0,
});
