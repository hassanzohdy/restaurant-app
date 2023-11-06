import { atom } from "@mongez/react-atom";

export const menuDisplayModeAtom = atom<"grid" | "list">({
  key: "menuDisplayMode",
  default: "grid",
});
