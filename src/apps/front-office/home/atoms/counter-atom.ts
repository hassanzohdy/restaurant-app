import { atom } from "@mongez/react-atom";

export const counterAtom = atom<number>({
  key: "counter",
  default: 0,
});
