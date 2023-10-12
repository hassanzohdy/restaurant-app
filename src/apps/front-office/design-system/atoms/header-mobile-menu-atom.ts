import { atom } from "@mongez/react-atom";

export type headerMobileMenuAtom = {
  opened: false;
};

export const headerMobileMenuAtom = atom<headerMobileMenuAtom>({
  key: "headerMobileMenu",
  default: {
    opened: false,
  },
});
