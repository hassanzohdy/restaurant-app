import { atom, Atom } from "@mongez/react-atom";

export const loginNeedVerifyAtom: Atom = atom({
  key: "loginNeedVerify",
  default: false,
});

export const OTPEmailAtom: Atom = atom({
  key: "OTPEmail",
  default: "",
});
