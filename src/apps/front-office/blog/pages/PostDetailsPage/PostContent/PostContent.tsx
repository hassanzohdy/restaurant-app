import { trans } from "@mongez/localization";
import { postAtom } from "apps/front-office/blog/atoms";

export default function PostContent() {
  const content = postAtom.use("content");

  return (
    <>
      <p>{trans("description")}</p>
      <h1>{content}</h1>
    </>
  );
}
