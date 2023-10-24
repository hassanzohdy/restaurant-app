import { useEffect } from "react";

export type OverLayProps = {
  atom;
  opened: boolean;
};
export default function OverLay({ atom, opened }: OverLayProps) {
  useEffect(() => {
    if (opened) {
      window.document.body.style.overflow = "hidden";
    }
    return () => {
      window.document.body.style.overflow = "";
    };
  }, [opened]);
  return (
    <>
      <div
        className={`overlay ${opened ? "show" : "hide"} `}
        onClick={atom && (() => atom.change("opened", false))}></div>
    </>
  );
}
