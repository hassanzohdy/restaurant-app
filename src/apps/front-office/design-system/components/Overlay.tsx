import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Overlay = ({ children, onClose }: Props) => {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black z-50 gap-x-10 flex items-center justify-center p-8">
      {children}
    </div>,
    document.body,
  );
};

export default Overlay;
