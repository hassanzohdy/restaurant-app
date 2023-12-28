import { atom } from "@mongez/react-atom";

export type modalAtomType = {
  opened: boolean;
};

export const modalAtom = atom<modalAtomType>({
  key: "modal",
  default: {
    opened: false,
  },
});
