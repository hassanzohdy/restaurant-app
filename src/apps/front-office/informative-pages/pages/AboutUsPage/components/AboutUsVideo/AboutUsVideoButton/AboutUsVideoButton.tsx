import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { modalAtom } from "apps/front-office/design-system/atoms/modal-atom";
import styles from "./_AboutUsVideoButton.module.scss";

export default function AboutUsVideoButton() {
  return (
    <button
      onClick={() => modalAtom.change("opened", true)}
      className={`${styles.aboutUsVideoButton} inline-flex items-center justify-center w-[80px] h-[80px] bg-primary-main rounded-full mb-12 shadow-[0_0_0_8px_rgba(255,255,255,.2)] relative`}>
      <IconPlayerPlayFilled />
    </button>
  );
}
