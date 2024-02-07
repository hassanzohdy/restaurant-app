import { modalAtom } from "apps/front-office/design-system/atoms/modal-atom";
import Overlay from "apps/front-office/design-system/components/Overlay";
import { BsFillPlayFill } from "react-icons/bs";
import styles from "./_AboutUsVideoButton.module.scss";

export default function AboutUsVideoButton() {
  return (
    <>
      <button
        onClick={() => modalAtom.open()}
        className={`${styles.aboutUsVideoButton} inline-flex items-center justify-center w-[80px] h-[80px] bg-primary-main rounded-full mb-12 shadow-[0_0_0_8px_rgba(255,255,255,.2)] relative`}>
        <BsFillPlayFill size={30} />
      </button>
      <Overlay atom={modalAtom}>
        <iframe
          className="w-full h-[600px] max-lg:h-[450px] max-sm:h-[300px]"
          src="https://www.youtube.com/embed/pOn1sKSiyfs"></iframe>
      </Overlay>
    </>
  );
}
