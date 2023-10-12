import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  closeHandler: () => void;
};

const Overlay = ({ children, closeHandler }: Props) => {
  return createPortal(
    <div
      onClick={closeHandler}
      className="fixed inset-0 bg-black gap-x-10 flex items-center justify-center p-8">
      {children}
    </div>,
    document.body,
  );
};

export default Overlay;
