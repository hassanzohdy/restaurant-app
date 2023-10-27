import { useEffect } from "react";
import styles from './Overlay.module.scss';

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
        className={`overlay ${opened ? styles.show : styles.hide } w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-[#00000099] duration-300 transition-all ease-in-out z-40`}
        onClick={atom && (() => atom.change("opened", false))}></div>
    </>
  );
}
