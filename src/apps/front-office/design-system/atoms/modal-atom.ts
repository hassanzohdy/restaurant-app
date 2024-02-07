import { openAtom } from "@mongez/react-atom";

export type modalAtomType = {
  opened: boolean;
};

export const modalAtom = openAtom("ModelAtom");
