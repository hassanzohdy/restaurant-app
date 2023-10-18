import { postAtom } from "apps/front-office/blog/atoms";

export default function PostTop() {
  const title = postAtom.use("title");

  console.log("Rendered Title");

  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
