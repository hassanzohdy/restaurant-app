import FooterCopyRights from "./FooterCopyRights";
import FooterInformation from "./FooterInformation";
import FooterLogo from "./FooterLogo";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterPaymentMethods from "./FooterPaymentMethods";

export default function Footer() {
  return (
    <>
      <footer className="site-footer mt-auto bg-[#181818] text-white">
        <div className="footer-top text-center py-[100px] text-[15px] max-md:py-[70px]">
          <FooterLogo />
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-4">
              <FooterInformation />
              <FooterNewsLetter />
            </div>
          </div>
        </div>
        <div className="footer-bottom py-[32px] bg-secondary max-lg:pb-[64px]">
          <div className="container flex items-center justify-between mx-auto px-4 max-md:text-center max-md:flex-col">
            <FooterCopyRights />
            <FooterPaymentMethods />
          </div>
        </div>
      </footer>
    </>
  );
}
