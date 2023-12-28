import { atom } from "@mongez/react-atom";

export const resetPasswordAtom = atom({
  key: "resetPassword",
  default: {
    code: "",
    email: "",
    hasOTP: false,
  },
});
