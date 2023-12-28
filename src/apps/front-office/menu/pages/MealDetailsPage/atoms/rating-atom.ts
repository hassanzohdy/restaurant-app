import { atom } from "@mongez/react-atom";

export const ratingAtom = atom<number>({ key: "rating", default: 0 });
