import { logo } from "shared/assets";
import styles from "./FooterLogo.module.scss"

export default function FooterLogo() {
  return (
    <>
      <div className={`${styles.footerLogo} flex items-center justify-center mb-[85px] relative max-md:mb-[60px]`}>
        <span className="bg-[#181818] block px-[32px] relative">
          <img src={logo} className="logo w-[152px]" alt="logo" />
        </span>
      </div>
    </>
  );
}
