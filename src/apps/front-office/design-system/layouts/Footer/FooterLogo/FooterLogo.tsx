import { logo } from "shared/assets";

export default function FooterLogo() {
  return (
    <>
      <div className="footer-logo flex items-center justify-center">
        <span>
          <img src={logo} className="logo" alt="logo" />
        </span>
      </div>
    </>
  );
}
