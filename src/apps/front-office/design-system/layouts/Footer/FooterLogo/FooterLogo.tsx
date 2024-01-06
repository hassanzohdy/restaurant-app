import { settingsAtom } from "apps/general/atoms/settings-atom";
import styles from "./FooterLogo.module.scss";

export default function FooterLogo() {
  const general = settingsAtom.use("general") || {};

  const { footerLogo, appName } = general;

  if (!footerLogo) return null;

  return (
    <>
      <div
        className={`${styles.footerLogo} flex items-center justify-center mb-[85px] relative max-md:mb-[60px]`}>
        <span className="bg-[#181818] block px-[32px] relative">
          <img
            src={footerLogo.url}
            className="logo w-[152px]"
            title={appName}
            alt={appName}
          />
        </span>
      </div>
    </>
  );
}
