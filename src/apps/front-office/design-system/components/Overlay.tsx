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
<<<<<<< HEAD
      className="fixed inset-0 bg-black gap-x-10 flex items-center justify-center p-8">
=======
      className="fixed inset-0 bg-black z-50 gap-x-10 flex items-center justify-center p-8">
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
      {children}
    </div>,
    document.body,
  );
};

export default Overlay;
