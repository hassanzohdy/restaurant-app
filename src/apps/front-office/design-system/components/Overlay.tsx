import { Atom } from "@mongez/react-atom";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import useEscapeToClose from "../hooks/useEscapeToClose";

type Props = {
  children: ReactNode;
  atom: Atom;
};

const Overlay = ({ children, atom }: Props) => {
  const opened = atom.use("opened");
  useEscapeToClose(opened, () => atom.reset());

  useEffect(() => {
    if (opened) {
      window.document.body.style.overflow = "hidden";
    }
    return () => {
      window.document.body.style.overflow = "";
    };
  }, [opened]);

  return createPortal(
    <div
      onClick={() => atom.reset()}
      className={`fixed inset-0 z-50 gap-x-10 flex items-center justify-center p-8 backdrop-blur-[5px] bg-[#00000099] duration-300 transition-all ease-in-out ${
        opened ? "visible" : "invisible"
      }`}>
      {children}
    </div>,
    document.body,
  );
};

export default Overlay;
