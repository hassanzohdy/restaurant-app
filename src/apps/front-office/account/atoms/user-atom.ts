import { atom } from "@mongez/react-atom";
import user from "apps/front-office/account/user";

export type UserData = {
  id: number;
  name: string;
  email: string;
  cart?: number;
  wishlist?: number;
  phoneNumber?: number;
  firstName?: string;
  lastName?: string;
};

export const userAtom = atom<UserData>({
  key: "user",
  default: user.all() as UserData,
});
