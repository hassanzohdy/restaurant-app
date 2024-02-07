import { AiOutlineClose } from "react-icons/ai";
import { modalAtom } from "../../atoms/modal-atom";
import OverLay from "../../layouts/OverLay";
import styles from "./_Modal.module.scss";

export type ModalProps = {
  title?: string;
  variant: "video" | "textContent";
  children: React.ReactNode;
};
export default function Modal({ title, variant, children }: ModalProps) {
  const opened = modalAtom.use("opened");
  return (
    <>
      <div
        className={`${
          styles.modal
        } flex items-center asdf justify-center fixed z-50 ${
          opened ? styles.show : styles.hide
        } duration-300 transition-all ease-in-out`}>
        <div
          className={` ${
            variant === "textContent"
              ? "bg-white"
              : variant === "video"
                ? "bg-transparent"
                : ""
          } modal-content w-[90%] max-w-[900px] rounded-lg overflow-hidden z-50  `}>
          <div className="modal-header">
            {title ? (
              <h3 className="p-[15px] text-dark text-[24px] capitalize font-bold max-sm:text-[16px]">
                {title}
              </h3>
            ) : (
              ""
            )}
            <button
              onClick={() => modalAtom.change("opened", true)}
              className="close-modal text-white opacity-50 absolute top-3 right-3 hover:opacity-100 duration-700 transition-all ease-in-out">
              <AiOutlineClose size="30" />
            </button>
          </div>
          <div className="modal-body p-[15px]">{children}</div>
        </div>
      </div>
      <OverLay atom={modalAtom} opened={opened} />
    </>
  );
}
