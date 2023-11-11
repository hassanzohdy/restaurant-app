import { atom } from "@mongez/react-atom";

export type accordionAtomType = {
  opened: boolean;
};

export const accordionAtom = atom<accordionAtomType>({
  key: "accordion",
  default: {
    opened: false,
  },
});
