import { Atom } from "@mongez/react-atom";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Overlay.module.scss";

export type OverLayProps = {
  atom?: Atom<any>;
  opened: boolean;
  onClick?(): void;
};

export default function OverLay({ onClick, atom, opened }: OverLayProps) {
  useEffect(() => {
    if (opened) {
      window.document.body.style.overflow = "hidden";
    }
    return () => {
      window.document.body.style.overflow = "";
    };
  }, [opened]);

  return createPortal(
    <>
      <div
        className={`overlay ${
          opened ? styles.show : styles.hide
        }  w-full h-full fixed inset-0 backdrop-blur-[5px] bg-[#00000099] duration-300 transition-all ease-in-out z-40`}
        onClick={() => {
          atom?.change("opened", false);
          onClick?.();
        }}></div>
    </>,
    document.body,
  );
}
