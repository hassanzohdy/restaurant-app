import { atom } from "@mongez/react-atom";
import { Post } from "apps/front-office/blog/utils";

export const postAtom = atom<Post>({
  key: "post",
  default: {},
});
