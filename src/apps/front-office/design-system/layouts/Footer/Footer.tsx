import FooterCopyRights from "./FooterCopyRights";
import FooterInformation from "./FooterInformation";
import FooterLogo from "./FooterLogo";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterPaymentMethods from "./FooterPaymentMethods";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top text-center">
          <FooterLogo />
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-4">
              <FooterInformation />
              <FooterNewsLetter />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container flex items-center justify-between mx-auto px-4">
            <FooterCopyRights />
            <FooterPaymentMethods />
          </div>
        </div>
      </footer>
    </>
  );
}
